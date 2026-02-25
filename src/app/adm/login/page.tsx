"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";

export default function LoginPage() {
	const router = useRouter();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [serverError, setServerError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		setEmailError("");
		setPasswordError("");
		setServerError("");

		const email = emailRef.current?.value || "";
		const password = passwordRef.current?.value || "";

		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();

			if (!res.ok) {
				if (data.error === "Usuário inválido") {
					setEmailError(data.error);
				} else if (data.error === "Senha incorreta") {
					setPasswordError(data.error);
				} else {
					setServerError("Erro interno do servidor");
				}
				return;
			}

			router.push("/adm/blogs");

		} catch {
			setServerError("Erro interno do servidor");
		}
	}

	return (
		<main className="min-h-screen flex items-center justify-center p-8">
			<section className="w-full max-w-md bg-white border border-zinc-200 rounded-lg p-8 shadow-sm">

				<div className="flex justify-center mb-6">
					<Image src="/assets/global/logo.png" alt="Logo" width={80} height={80} />
				</div>

				<h1 className="text-3xl text-(--main-color) mb-6 text-center">
					Acesso restrito
				</h1>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">

					<div>
						<label className="block mb-1 text-(--main-color)">
							Email
						</label>

						<input
							ref={emailRef}
							type="email"
							name="email"
							autoComplete="email"
							className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:border-(--main-color)"
						/>

						{emailError && (
							<p className="text-red-600 text-sm mt-1">
								{emailError}
							</p>
						)}
					</div>

					<div>
						<label className="block mb-1 text-(--main-color)">
							Senha
						</label>

						<input
							ref={passwordRef}
							type="password"
							name="password"
							autoComplete="current-password"
							className="w-full border border-zinc-300 rounded px-3 py-2 focus:outline-none focus:border-(--main-color)"
						/>

						{passwordError && (
							<p className="text-red-600 text-sm mt-1">
								{passwordError}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="mt-4 bg-(--secondary-color) text-(--main-color) py-2 px-4 rounded hover:opacity-90 transition"
					>
						Entrar
					</button>

					{serverError && (
						<p className="text-red-500 mt-2">
							{serverError}
						</p>
					)}

				</form>

			</section>
		</main>
	);
}