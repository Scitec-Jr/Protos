/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import slugify from "slugify";
import { db } from "@/lib/db";
import { z } from "zod";
import { uploadFile } from "@/lib/upload";

const schema = z.object({
	titulo: z.string().min(3),
});

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const busca = searchParams.get("busca") || "";
	const data = searchParams.get("data") || "";

	let query = `
    SELECT *
    FROM Blog
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

		if (!imagem || !pdf) {
			return NextResponse.json({ error: "Arquivos obrigatórios" }, { status: 400 });
		}

		const slug = slugify(titulo, { lower: true });
		const timestamp = Date.now();

		const imagemBuffer = Buffer.from(await imagem.arrayBuffer());
		const pdfBuffer = Buffer.from(await pdf.arrayBuffer());

		const imagemUpload = await uploadFile(imagemBuffer, "blogs", `${slug}-${timestamp}`, "image");

		const pdfUpload = await uploadFile(pdfBuffer, "blogs", `${slug}-${timestamp}`, "raw");

		await db.execute(
			`
      INSERT INTO Blog (
        titulo,
        imagem_capa,
        conteudo
      )
      VALUES (?, ?, ?)
      `,
			[titulo, imagemUpload.secure_url, pdfUpload.secure_url],
		);

		return NextResponse.json({ success: true });
	} catch (error) {
		console.log(error);

		return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
	}
}
