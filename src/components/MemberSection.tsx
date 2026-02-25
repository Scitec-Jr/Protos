"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Membro } from "@/types/membro";

export default function MemberSection() {
	const [membros, setMembros] = useState<Membro[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMembros = async () => {
			try {
				const response = await fetch("/api/membros");
				const data = await response.json();
				setMembros(data);
			} catch (error) {
				console.error("Erro ao buscar membros:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMembros();
	}, []);

	if (loading) {
		return <div className="text-center py-8">Carregando membros...</div>;
	}

	return (
		<div className="flex flex-wrap justify-center gap-8">
			{membros.map((membro) => (
				<div key={membro.id} className="flex flex-col items-center w-50">
					<Image
						src={membro.foto}
						alt={membro.nome}
						width={200}
						height={265}
						className="w-full h-60"
					/>
					<h3 className="my-2 serif font-bold text-center">{membro.nome}</h3>
					{membro.descricao && (
						<p className="serif">{membro.descricao}</p>
					)}
					<div className="flex flex-col gap-2 mt-2">
						{membro.linkedin && (
							<a
								href={membro.linkedin}
								className="serif font-bold underline underline-offset-2 text-blue-600"
                                target="_blank"
							>
								Linkedin
							</a>
						)}
						{membro.lattes && (
							<a
								href={membro.lattes}
								className="serif font-bold underline underline-offset-2 text-blue-600"
                                target="_blank"
							>
								Currículo Lattes
							</a>
						)}
						{membro.email && (
							<a
								href={`mailto:${membro.email}`}
								className="serif font-bold underline underline-offset-2 text-blue-600"
                                target="_blank"
							>
								E-mail
							</a>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
