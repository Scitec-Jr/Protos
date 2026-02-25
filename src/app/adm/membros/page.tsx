"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Membro } from "@/types/membro";

export default function AdminMembros() {
	const [membros, setMembros] = useState<Membro[]>([]);

	const [open, setOpen] = useState(false);

	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [foto, setFoto] = useState<File | null>(null);
	const [linkedin, setLinkedin] = useState("");
	const [lattes, setLattes] = useState("");
	const [email, setEmail] = useState("");

	const [busca, setBusca] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const [editando, setEditando] = useState<Membro | null>(null);

	const [nomeEdit, setNomeEdit] = useState("");
	const [descricaoEdit, setDescricaoEdit] = useState("");
	const [fotoEdit, setFotoEdit] = useState<File | null>(null);
	const [linkedinEdit, setLinkedinEdit] = useState("");
	const [lattesEdit, setLattesEdit] = useState("");
	const [emailEdit, setEmailEdit] = useState("");

	async function carregarMembros() {
		const params = new URLSearchParams();

		if (busca) params.append("busca", busca);

		const res = await fetch("/api/membros?" + params.toString());

		const json = await res.json();

		setMembros(json);
	}

	useEffect(() => {
		let ativo = true;

		async function fetchMembros() {
			const params = new URLSearchParams();

			if (busca) params.append("busca", busca);

			const res = await fetch("/api/membros?" + params.toString());

			const json = await res.json();

			if (ativo) setMembros(json);
		}

		fetchMembros();

		return () => {
			ativo = false;
		};
	}, [busca]);

	async function handleSubmit() {
		setError("");

		if (!nome.trim()) {
			setError("Nome obrigatório");
			return;
		}

		if (!descricao.trim()) {
			setError("Descrição obrigatória");
			return;
		}

		if (!foto) {
			setError("Foto obrigatória");
			return;
		}

		setLoading(true);

		const formData = new FormData();

		formData.append("nome", nome);
		formData.append("descricao", descricao);
		formData.append("foto", foto);

		if (linkedin) formData.append("linkedin", linkedin);
		if (lattes) formData.append("lattes", lattes);
		if (email) formData.append("email", email);

		const res = await fetch("/api/membros", {
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

		setNome("");
		setDescricao("");
		setFoto(null);
		setLinkedin("");
		setLattes("");
		setEmail("");

		carregarMembros();
	}

	async function deletar(id: number) {
		if (!confirm("Confirmar exclusão?")) return;

		const res = await fetch("/api/membros/" + id, {
			method: "DELETE",
		});

		if (!res.ok) {
			alert("Erro ao deletar");
			return;
		}

		carregarMembros();
	}

	async function salvarEdicao() {
		if (!editando) return;

		const formData = new FormData();

		formData.append("nome", nomeEdit);
		formData.append("descricao", descricaoEdit);

		if (fotoEdit) formData.append("foto", fotoEdit);
		if (linkedinEdit) formData.append("linkedin", linkedinEdit);
		if (lattesEdit) formData.append("lattes", lattesEdit);
		if (emailEdit) formData.append("email", emailEdit);

		await fetch("/api/membros/" + editando.id, {
			method: "PUT",
			body: formData,
		});

		setEditando(null);

		carregarMembros();
	}

	return (
		<div className="flex min-h-screen bg-gray-50">
			<aside className="m-2 p-4 bg-(--secondary-color) rounded-xl shadow-sm">
				<button onClick={() => setOpen(true)} className="w-full bg-(--main-color) text-white px-3 py-2 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200">
					+ Novo Membro
				</button>
			</aside>

			<main className="flex-1 p-8">
				<div className="mb-8">
					<Link href="/adm/blogs" className="text-blue-600 hover:text-blue-800 transition-colors">
						Gerenciar blogs
					</Link>

					<h1 className="text-3xl font-bold text-gray-900 mb-4">Gerenciar Membros</h1>

					<input type="text" placeholder="Buscar por nome..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
				</div>

				{membros.length === 0 ? (
					<div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
						<p className="text-gray-500 text-lg">Sem membros</p>
					</div>
				) : (
					<div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
						{membros.map((membro) => (
							<div key={membro.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
								<div className="relative h-48 bg-gray-200">
									<Image src={membro.foto} alt={membro.nome} width={400} height={200} className="w-full h-full object-cover" />
								</div>

								<div className="p-5">
									<h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{membro.nome}</h2>

									<p className="text-sm text-gray-500 mb-4 line-clamp-3">{membro.descricao}</p>

									<div className="flex gap-3">
										<button
											onClick={() => {
												setEditando(membro);

												setNomeEdit(membro.nome);
												setDescricaoEdit(membro.descricao);
												setLinkedinEdit(membro.linkedin || "");
												setLattesEdit(membro.lattes || "");
												setEmailEdit(membro.email || "");
												setFotoEdit(null);
											}}
											className="flex-1 bg-gray-300 text-gray-600 py-2 px-3 rounded-lg font-medium cursor-pointer text-sm"
										>
											Editar
										</button>

										<button onClick={() => deletar(membro.id)} className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-3 rounded-lg font-medium transition-colors duration-200 text-sm cursor-pointer">
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
					<div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">Novo Membro</h2>

						<div className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
								<input type="text" placeholder="Digite o nome do membro" value={nome} onChange={(e) => setNome(e.target.value)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Descrição *</label>
								<textarea placeholder="Digite a descrição do membro" value={descricao} onChange={(e) => setDescricao(e.target.value)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Imagem do Membro *</label>
								<input type="file" accept="image/*" onChange={(e) => setFoto(e.target.files?.[0] || null)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
								{foto && <p className="text-xs text-green-600 mt-2">✓ {foto.name}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
								<input type="text" placeholder="https://linkedin.com/in/..." value={linkedin} onChange={(e) => setLinkedin(e.target.value)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Lattes</label>
								<input type="text" placeholder="http://lattes.cnpq.br/..." value={lattes} onChange={(e) => setLattes(e.target.value)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
								<input type="email" placeholder="email@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed" />
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

			{/* Modal editar */}

			{editando && (
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setEditando(null)}>
					<div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">Editar Membro</h2>

						<div className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
								<input type="text" value={nomeEdit} onChange={(e) => setNomeEdit(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
								<textarea value={descricaoEdit} onChange={(e) => setDescricaoEdit(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Imagem do Membro</label>
								<input type="file" accept="image/*" onChange={(e) => setFotoEdit(e.target.files?.[0] || null)} className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer transition-colors" />
								{fotoEdit && <p className="text-xs text-green-600 mt-2">✓ {fotoEdit.name}</p>}
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
								<input type="text" value={linkedinEdit} onChange={(e) => setLinkedinEdit(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Lattes</label>
								<input type="text" value={lattesEdit} onChange={(e) => setLattesEdit(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
								<input type="text" value={emailEdit} onChange={(e) => setEmailEdit(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
							</div>

							<div className="flex gap-3 pt-4">
								<button onClick={salvarEdicao} className="flex-1 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
									Salvar
								</button>

								<button onClick={() => setEditando(null)} className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2 rounded-lg transition-colors duration-200">
									Cancelar
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
