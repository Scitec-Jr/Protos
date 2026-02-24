/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";

function extractPublicId(url: string) {
	const parts = url.split("/");
	const uploadIndex = parts.findIndex(p => p === "upload");

	if (uploadIndex === -1) return null;

	const publicIdWithExtension = parts
		.slice(uploadIndex + 1)
		.join("/");

	return publicIdWithExtension.replace(/\.[^/.]+$/, "");
}

export async function DELETE(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {

		const { id } = await params;

		const [rows]: any = await db.execute(
			"SELECT imagem_capa, conteudo FROM blog WHERE id=?",
			[id]
		);

		if (rows.length === 0) {
			return NextResponse.json(
				{ error: "Blog não encontrado" },
				{ status: 404 }
			);
		}

		const imagemUrl = rows[0].imagem_capa;
		const pdfUrl = rows[0].conteudo;

		const imagemPublicId = extractPublicId(imagemUrl)!.split("/").slice(1).join("/");
		const pdfPublicId = extractPublicId(pdfUrl)!.split("/").slice(1).join("/");

		if (imagemPublicId) {
			await cloudinary.uploader.destroy(imagemPublicId, {
				resource_type: "image",
			});
		}

		if (pdfPublicId) {
			await cloudinary.uploader.destroy(pdfPublicId, {
				resource_type: "raw",
			});
		}

		await db.execute(
			"DELETE FROM blog WHERE id=?",
			[id]
		);

		return NextResponse.json({ success: true });

	} catch (error) {

		console.log(error);

		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 }
		);

	}
}

export async function PUT(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {

	try {

		const { id } = await params;

		const body = await req.json();

		const titulo = body.titulo;

		if (!titulo) {
			return NextResponse.json(
				{ error: "Título obrigatório" },
				{ status: 400 }
			);
		}

		await db.execute(
			`
			UPDATE blog
			SET titulo=?, updated_at=NOW()
			WHERE id=?
			`,
			[titulo, id]
		);

		return NextResponse.json({ success: true });

	} catch (error) {

		console.log(error);

		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 }
		);

	}
}

export async function GET(req: Request) {

	const { searchParams } = new URL(req.url);

	const busca = searchParams.get("busca") || "";
	const data = searchParams.get("data") || "";

	let query = `
		SELECT *
		FROM blog
		WHERE titulo LIKE ?
	`;

	const params: any[] = [`%${busca}%`];

	if (data) {
		query += " AND DATE(created_at) = ?";
		params.push(data);
	}

	query += " ORDER BY created_at DESC";

	const [rows] = await db.execute(query, params);

	return NextResponse.json(rows);
}