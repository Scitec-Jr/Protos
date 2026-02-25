"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

export default function AdminBlogs() {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	const [open, setOpen] = useState(false);

	const [titulo, setTitulo] = useState("");
	const [imagem, setImagem] = useState<File | null>(null);
	const [pdf, setPdf] = useState<File | null>(null);

	const [busca, setBusca] = useState("");
	const [data, setData] = useState("");

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const [editando, setEditando] = useState<Blog | null>(null);
	const [tituloEdit, setTituloEdit] = useState("");

	async function carregarBlogs() {
		const params = new URLSearchParams();

		if (busca) params.append("busca", busca);
		if (data) params.append("data", data);

		const res = await fetch("/api/blogs?" + params.toString());

		const json = await res.json();

		setBlogs(json);
	}

	useEffect(() => {
		let ativo = true;

		async function fetchBlogs() {
			const params = new URLSearchParams();

			if (busca) params.append("busca", busca);

			if (data) params.append("data", data);

			const res = await fetch("/api/blogs?" + params.toString());

			const json = await res.json();

			if (ativo) setBlogs(json);
		}

		fetchBlogs();

		return () => {
			ativo = false;
		};
	}, [busca, data]);

	async function handleSubmit() {
		setError("");

		if (!titulo.trim()) {
			setError("Título obrigatório");
			return;
		}

		if (!imagem) {
			setError("Imagem obrigatória");
			return;
		}

		if (!pdf) {
			setError("PDF obrigatório");
			return;
		}

		setLoading(true);

		const formData = new FormData();

		formData.append("titulo", titulo);
		formData.append("imagem", imagem);
		formData.append("pdf", pdf);

		const res = await fetch("/api/blogs", {
			method: "POST",
			body: formData,
		});

		setLoading(false);

		if (!res.ok) {
			const data = await res.json();
			setError(data.error);
			return;
		}

		setOpen(false);

		setTitulo("");
		setImagem(null);
		setPdf(null);

		carregarBlogs();
	}

	async function deletar(id: number) {
		if (!confirm("Confirmar exclusão?")) return;

		const res = await fetch("/api/blogs/" + id, {
			method: "DELETE",
		});

		if (!res.ok) {
			alert("Erro ao deletar");
			return;
		}

		carregarBlogs();
	}

	return (
		<div className="flex min-h-screen bg-gray-50">
			<aside className="m-2 p-4 bg-(--secondary-color) rounded-xl shadow-sm">
				<button onClick={() => setOpen(true)} className="w-full bg-(--main-color) text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200">
					+ Novo Blog
				</button>

				<div className="mt-8">
					<label className="block text-sm font-medium text-gray-700 mb-2">Filtrar por data</label>

					<input type="date" value={data} onChange={(e) => setData(e.target.value)} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
				</div>
			</aside>

			<main className="flex-1 p-8">
				<div className="mb-8">
                    <Link href="membros" className="text-blue-600 hover:text-blue-800 transition-colors">Gerenciar membros</Link>
					<h1 className="text-3xl font-bold text-gray-900 mb-4">Gerenciar Blogs</h1>
					<input type="text" placeholder="Buscar por título..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
				</div>

				{blogs.length === 0 ? (
					<div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
						<p className="text-gray-500 text-lg">Nenhum blog encontrado</p>
					</div>
				) : (
					<div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
						{blogs.map((blog) => (
							<div key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
								<div className="relative h-48 bg-gray-200">
									<Image src={blog.imagem_capa} alt={blog.titulo} width={400} height={200} className="w-full h-full object-cover" />
								</div>

								<div className="p-5">
									<h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{blog.titulo}</h2>

									<p className="text-sm text-gray-500 mb-4">{new Date(blog.created_at).toLocaleDateString("pt-BR")}</p>

									<div className="flex gap-3">
										<button
											onClick={() => {
												setEditando(blog);
												setTituloEdit(blog.titulo);
											}}
											className="flex-1 bg-gray-300 text-gray-600 py-2 px-3 rounded-lg font-medium cursor-pointer text-sm"
										>
											Editar
										</button>

										<button onClick={() => deletar(blog.id)} className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm cursor-pointer">
											Deletar
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</main>

			{open && (
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => !loading && setOpen(false)}>
					<div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">Novo Blog</h2>

						<div className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
								<input type="text" placeholder="Digite o título do blog" value={titulo} onChange={(e) => setTitulo(e.target.value)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Imagem de Capa *</label>
								<input type="file" accept="image/*" onChange={(e) => setImagem(e.target.files?.[0] || null)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
								{imagem && <p className="text-xs text-green-600 mt-2">✓ {imagem.name}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">PDF *</label>
								<input type="file" accept="application/pdf" onChange={(e) => setPdf(e.target.files?.[0] || null)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 file:cursor-pointer cursor-pointer transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
								{pdf && <p className="text-xs text-green-600 mt-2">✓ {pdf.name}</p>}
							</div>

							{error && (
								<div className="p-3 bg-red-50 border border-red-200 rounded-lg">
									<p className="text-sm text-red-700">{error}</p>
								</div>
							)}

							<div className="flex gap-3 pt-4">
								<button onClick={handleSubmit} disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition-colors duration-200">
									{loading ? "Criando..." : "Criar"}
								</button>

								<button onClick={() => setOpen(false)} disabled={loading} className="flex-1 border-2 border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-semibold py-2 rounded-lg transition-colors duration-200">
									Cancelar
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{editando && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center">
					<div className="bg-white p-6 rounded-xl w-96">
						<h2 className="text-xl font-bold mb-4">Editar Blog</h2>

						<input value={tituloEdit} onChange={(e) => setTituloEdit(e.target.value)} className="w-full border p-2 rounded" />

						<div className="flex gap-2 mt-4">
							<button
								onClick={async () => {
									await fetch("/api/blogs/" + editando.id, {
										method: "PUT",
										headers: {
											"Content-Type": "application/json",
										},
										body: JSON.stringify({
											titulo: tituloEdit,
										}),
									});

									setEditando(null);

									carregarBlogs();
								}}
								className="bg-green-600 text-white px-4 py-2 rounded"
							>
								Salvar
							</button>

							<button onClick={() => setEditando(null)} className="border px-4 py-2 rounded">
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
