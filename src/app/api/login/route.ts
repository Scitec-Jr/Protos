/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { email, password } = await req.json();

    console.log(email)

	const [rows]: any = await db.query(
		"SELECT * FROM User WHERE email = ?",
		[email]
	);

	if (rows.length === 0) {
		return NextResponse.json(
			{ error: "Usuário inválido" },
			{ status: 401 }
		);
	}

	const user = rows[0];

	if (user.senha !== password) {
		return NextResponse.json(
			{ error: "Senha incorreta" },
			{ status: 401 }
		);
	}

	return NextResponse.json({ success: true });
}