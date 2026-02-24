/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { db } from "@/lib/db";
import { Blog } from "@/types/blog";

export default async function MainBlogs() {
	const [blogs] = (await db.execute(
		`
		SELECT
			id,
			titulo,
            conteudo,
			imagem_capa,
			created_at
		FROM Blog
		ORDER BY created_at DESC
		LIMIT 4
		`,
	)) as [Blog[], any];

	if (blogs.length === 0) return <p className="text-gray-500">Nenhuma publicação encontrada</p>;

	return (
		<div className="flex flex-wrap justify-center gap-4 bg-(--secondary-color) p-4 rounded-lg">
			{blogs.map((blog) => (
				<a key={blog.id} href={`/api/blogs/pdf/${blog.id}`} target="_blank" className="relative flex flex-col justify-end h-full">
					<Image src={blog.imagem_capa} alt={blog.titulo} width={500} height={300} className="w-full h-full" />

					<div className="absolute bottom-4 left-4 p-2 bg-(--secondary-color) opacity-85 text-white rounded-xl z-10">
						<h3 className="text-lg serif">Postagem em Destaque</h3>
						<p>{new Date(blog.created_at).toLocaleDateString("pt-BR")}</p>
					</div>
				</a>
			))}
		</div>
	);
}
