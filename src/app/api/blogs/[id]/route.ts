/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import fs from "fs/promises";
import path from "path";

export async function DELETE(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {

	const { id } = await params;

	const [rows]: any = await db.execute(
		"SELECT imagem_capa, conteudo FROM blog WHERE id=?",
		[id]
	);

	if (rows.length === 0)
		return NextResponse.json(
			{ error: "Blog não encontrado" },
			{ status: 404 }
		);

	// remove pasta do blog
	const folder = rows[0].imagem_capa
		.split("/")
		.slice(0, -1)
		.join("/");

	const fullPath = path.join(
		process.cwd(),
		"public",
		folder
	);

	await fs.rm(fullPath, {
		recursive: true,
		force: true
	});

	await db.execute(
		"DELETE FROM blog WHERE id=?",
		[id]
	);

	return NextResponse.json({
		success: true
	});
}

export async function PUT(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {

	const { id } = await params;

	const body = await req.json();

	const titulo = body.titulo;

	if (!titulo)
		return NextResponse.json(
			{ error: "Título obrigatório" },
			{ status: 400 }
		);

	await db.execute(
		`
		UPDATE blog
		SET titulo=?, updated_at=NOW()
		WHERE id=?
		`,
		[titulo, id]
	);

	return NextResponse.json({
		success: true
	});
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

