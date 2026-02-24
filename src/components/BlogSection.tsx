"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";

export default function BlogSection({ blogs }: { blogs: Blog[] }) {
	const [search, setSearch] = useState("");

	const filteredBlogs = useMemo(() => {
		if (!search) return blogs;

		return blogs.filter((blog) =>
			blog.titulo.toLowerCase().includes(search.toLowerCase())
		);
	}, [search, blogs]);

	return (
		<>
			<section className="max-w-7xl mx-auto px-6 pt-10">

				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

					<h1 className="text-4xl font-semibold text-(--main-color)">
						Blogs
					</h1>

					<input
						type="search"
						placeholder="Pesquisar blog..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="
							w-full md:w-80
							bg-white
							border border-gray-200
							rounded-lg
							px-4 py-2
							outline-none
							focus:ring-2
							focus:ring-(--main-color)
							transition
						"
					/>

				</div>

			</section>

			<section className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{filteredBlogs.map((blog) => (
					<a
						key={blog.id}
						href={`/api/blogs/pdf/${blog.id}`}
						target="_blank"
						className="
							group
							bg-white
							rounded-xl
							overflow-hidden
							border border-gray-200
							hover:border-(--main-color)
							hover:shadow-lg
							transition
							cursor-pointer
						"
					>

						<div className="relative h-48">

							<Image
								src={blog.imagem_capa}
								alt={blog.titulo}
								fill
								className="object-cover group-hover:scale-105 transition"
							/>

						</div>

						<div className="p-4">

							<p className="text-sm text-gray-500 mb-1">
								{new Date(blog.created_at).toLocaleDateString("pt-BR")}
							</p>

							<h2 className="text-xl font-semibold text-(--main-color)">
								{blog.titulo}
							</h2>

						</div>

					</a>
				))}

				{filteredBlogs.length === 0 && (
					<p className="text-gray-500 col-span-full">
						Nenhum blog encontrado
					</p>
				)}

			</section>
		</>
	);
}