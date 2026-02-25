/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";
import { uploadFile } from "@/lib/upload";

const schema = z.object({
	nome: z.string().min(3),
});

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const busca = searchParams.get("busca") || "";
	const data = searchParams.get("data") || "";

	let query = `
    SELECT *
    FROM Membros
    WHERE nome LIKE ?
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

		const nome = formData.get("nome") as string;
		const descricao = formData.get("descricao") as string;
		const foto = formData.get("foto") as File;
		const linkedin = formData.get("linkedin") as string;
		const lattes = formData.get("lattes") as string;
		const email = formData.get("email") as string;

		schema.parse({ nome });

		if (!foto) {
			return NextResponse.json({ error: "Foto obrigatória" }, { status: 400 });
		}

		if (!descricao.trim()) {
			return NextResponse.json({ error: "Descrição obrigatória" }, { status: 400 });
		}

		const timestamp = Date.now();

		const fotoBuffer = Buffer.from(await foto.arrayBuffer());

		const fotoUpload = await uploadFile(fotoBuffer, "membros", `${nome.replace(/\s+/g, "-")}-${timestamp}`, "image");

		await db.execute(
			`
      INSERT INTO Membros (
        nome,
        descricao,
        foto,
        linkedin,
        lattes,
        email
      )
      VALUES (?, ?, ?, ?, ?, ?)
      `,
			[nome, descricao, fotoUpload.secure_url, linkedin || null, lattes || null, email || null],
		);

		return NextResponse.json({ success: true });
	} catch (error) {
		console.log(error);

		return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
	}
}
