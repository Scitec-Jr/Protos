/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogSection from "@/components/BlogSection";
import { db } from "@/lib/db";
import { Blog } from "@/types/blog";

type PageParams = {
	params: Promise<{
		categoria: "blogs-cientificos" | "blogs-de-conteudos";
	}>;
	searchParams?: Promise<{
		q?: string;
	}>;
};

export default async function BlogTemplate({ searchParams }: PageParams) {
	const query = (await searchParams)?.q || "";

	const sql = `
		SELECT
			id,
			titulo,
			imagem_capa,
			conteudo,
			created_at
		FROM Blog
		WHERE titulo LIKE ?
		ORDER BY created_at DESC
	`;

	const [blogs] = (await db.execute(sql, [`%${query}%`])) as [Blog[], any];

	return <BlogSection blogs={blogs} />;
}
