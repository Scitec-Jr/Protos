/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  // Busca a URL do PDF no banco
  const [rows]: any = await db.execute(
    "SELECT conteudo FROM blog WHERE id=?",
    [id]
  );

  if (rows.length === 0) {
    return NextResponse.json({ error: "Blog não encontrado" }, { status: 404 });
  }

  const pdfUrl: string = rows[0].conteudo;

  // Pega o arquivo do Cloudinary
  const res = await fetch(pdfUrl);

  if (!res.ok) {
    return NextResponse.json({ error: "Erro ao acessar PDF" }, { status: 500 });
  }

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Retorna o PDF inline
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="blog-${id}.pdf"`,
    },
  });
}