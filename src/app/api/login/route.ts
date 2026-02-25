/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createToken } from "@/lib/auth";

export async function POST(req: Request) {
	try {
		const { email, password } = await req.json();

		if (!email || !password) {
			return NextResponse.json(
				{ error: "Email e senha são obrigatórios" },
				{ status: 400 }
			);
		}

		const [rows]: any = await db.query(
			"SELECT id, email, senha FROM User WHERE email = ? LIMIT 1",
			[email]
		);

		if (rows.length === 0) {
			return NextResponse.json(
				{ error: "Usuário inválido" },
				{ status: 401 }
			);
		}

		const user = rows[0];

		const senhaValida = await bcrypt.compare(
			password,
			user.senha
		);

		if (!senhaValida) {
			return NextResponse.json(
				{ error: "Senha incorreta" },
				{ status: 401 }
			);
		}

		const token = await createToken(user.id);

		const response = NextResponse.json({
			success: true,
		});

		response.cookies.set("auth", token, {
			httpOnly: true,
			path: "/",
			maxAge: 1000 * 60 * 60 * 24 * 7,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
		});

		return response;

	} catch (error) {
		console.error("Erro no login:", error);

		return NextResponse.json(
			{ error: "Erro interno do servidor" },
			{ status: 500 }
		);
	}
}