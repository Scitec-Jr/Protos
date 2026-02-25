/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";
import { uploadFile } from "@/lib/upload";

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
			"SELECT foto FROM membros WHERE id=?",
			[id]
		);

		if (rows.length === 0) {
			return NextResponse.json(
				{ error: "Membro não encontrado" },
				{ status: 404 }
			);
		}

		const fotoUrl = rows[0].foto;

		const fotoPublicId = extractPublicId(fotoUrl)?.split("/").slice(1).join("/");

		if (fotoPublicId) {
			await cloudinary.uploader.destroy(fotoPublicId, {
				resource_type: "image",
			});
		}

		await db.execute(
			"DELETE FROM membros WHERE id=?",
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

		const formData = await req.formData();

		const nome = formData.get("nome") as string;
		const descricao = formData.get("descricao") as string;
		const fotoEdit = formData.get("foto") as File;
		const linkedin = formData.get("linkedin") as string;
		const lattes = formData.get("lattes") as string;
		const email = formData.get("email") as string;

		if (!nome) {
			return NextResponse.json(
				{ error: "Nome obrigatório" },
				{ status: 400 }
			);
		}

		// Se houver nova foto, fazer upload
		let fotoUrl = null;
		if (fotoEdit) {
			const fotoBuffer = Buffer.from(await fotoEdit.arrayBuffer());
			const fotoUpload = await uploadFile(fotoBuffer, "membros", `${nome.replace(/\s+/g, "-")}-${Date.now()}`, "image");
			fotoUrl = fotoUpload.secure_url;

			// Deletar foto antiga
			const [rows]: any = await db.execute("SELECT foto FROM membros WHERE id=?", [id]);
			if (rows.length > 0) {
				const fotoAntigaUrl = rows[0].foto;
				const fotoPublicId = extractPublicId(fotoAntigaUrl)?.split("/").slice(1).join("/");
				if (fotoPublicId) {
					await cloudinary.uploader.destroy(fotoPublicId, { resource_type: "image" });
				}
			}
		}

		const updates = [];
		const values = [];

		updates.push("nome=?");
		values.push(nome);

		updates.push("descricao=?");
		values.push(descricao || null);

		if (linkedin) {
			updates.push("linkedin=?");
			values.push(linkedin);
		}

		if (lattes) {
			updates.push("lattes=?");
			values.push(lattes);
		}

		if (email) {
			updates.push("email=?");
			values.push(email);
		}

		if (fotoUrl) {
			updates.push("foto=?");
			values.push(fotoUrl);
		}

		updates.push("updated_at=NOW()");
		values.push(id);

		await db.execute(
			`UPDATE membros SET ${updates.join(", ")} WHERE id=?`,
			values
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

export async function GET(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {

	try {

		const { id } = await params;

		const [rows]: any = await db.execute(
			"SELECT * FROM membros WHERE id=?",
			[id]
		);

		if (rows.length === 0) {
			return NextResponse.json(
				{ error: "Membro não encontrado" },
				{ status: 404 }
			);
		}

		return NextResponse.json(rows[0]);

	} catch (error) {

		console.log(error);

		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 }
		);

	}
}
