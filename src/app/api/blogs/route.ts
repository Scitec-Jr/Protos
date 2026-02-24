/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import slugify from "slugify";
import fs from "fs/promises";
import path from "path";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
	titulo: z.string().min(3)
});

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

export async function POST(req: Request) {

	try {

		const formData = await req.formData();

		const titulo = formData.get("titulo") as string;
		const imagem = formData.get("imagem") as File;
		const pdf = formData.get("pdf") as File;

		schema.parse({ titulo });

		if (!imagem || !pdf)
			return NextResponse.json(
				{ error: "Arquivos obrigatórios" },
				{ status: 400 }
			);

		const [result]: any = await db.execute(
			"INSERT INTO blog (titulo, imagem_capa, conteudo) VALUES (?, '', '')",
			[titulo]
		);

		const id = result.insertId;

		const slug = slugify(titulo, { lower: true });

		const folder = `blog/${id}-${slug}`;

		const fullPath = path.join(
			process.cwd(),
			"public",
			folder
		);

		await fs.mkdir(fullPath, { recursive: true });

		const imagemBuffer = Buffer.from(await imagem.arrayBuffer());
		const pdfBuffer = Buffer.from(await pdf.arrayBuffer());

		await fs.writeFile(
			path.join(fullPath, "capa.png"),
			imagemBuffer
		);

		await fs.writeFile(
			path.join(fullPath, "conteudo.pdf"),
			pdfBuffer
		);

		await db.execute(
			`
			UPDATE blog
			SET imagem_capa=?, conteudo=?
			WHERE id=?
			`,
			[
				`/${folder}/capa.png`,
				`/${folder}/conteudo.pdf`,
				id
			]
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