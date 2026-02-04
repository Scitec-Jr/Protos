import Image from "next/image";
import Link from "next/link";

type PageParams = {
	params: Promise<{
		categoria: "blogs-cientificos" | "blogs-de-conteudos";
	}>;
};

export default async function BlogTemplate({ params }: PageParams) {
	const categoria = (await params).categoria;
	const titlePage = categoria
		.split("-")
		.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
		.join(" ");

	return (
		<main>
			<section className="max-w-360 mx-auto p-8 pb-0 lg:px-16">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
					<h1 className="text-4xl text-(--main-color)">{titlePage}</h1>

					<div className="flex gap-4 p-2 bg-(--secondary-color) rounded">
						<input type="search" placeholder="Pesquisar..." name={categoria} id={categoria} className="ps-2 bg-(--light-color) rounded" />

						<button className="py-2 px-4 bg-(--secondary-accent-color) rounded cursor-pointer">
							<Image src={"/assets/icons/search.png"} alt={"Busca"} width={18} height={18} />
						</button>
					</div>
				</div>

				<p className="serif">Pequeno resumo sobre o que o Blog Científico trata</p>
			</section>

			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-360 mx-auto p-8 lg:px-16">
				<div className="col-span-1 md:col-span-2">
					<Link href={`${categoria}/1`}>
						<div>
							<Image src={"/assets/images/placeholder.png"} alt="Blog" width={300} height={200} className="w-full" />
						</div>

						<div className="flex justify-between">
							<h3 className="serif font-bold">Tema</h3>

							<p className="serif">01 de Setembro de 2025</p>
						</div>

						<h2 className={`text-2xl ${categoria == "blogs-cientificos" ? "text-(--secondary-color)" : "text-(--main-color)"}`}>Título</h2>
						<p className="serif">Assunto ou resumo</p>
					</Link>
				</div>

				<div>
					<Link href={`${categoria}/1`} className="flex flex-col h-full">
						<div className="flex-1">
							<Image src={"/assets/images/placeholder.png"} alt="Blog" width={300} height={200} className="w-full h-full" />
						</div>

						<div className="flex justify-between">
							<h3 className="serif font-bold">Tema</h3>

							<p className="serif">01 de Setembro de 2025</p>
						</div>

						<h2 className={`text-2xl ${categoria == "blogs-cientificos" ? "text-(--secondary-color)" : "text-(--main-color)"}`}>Título</h2>
						<p className="serif">Assunto ou resumo</p>
					</Link>
				</div>

				<div>
					<Link href={`${categoria}/1`}>
						<div>
							<Image src={"/assets/images/placeholder.png"} alt="Blog" width={300} height={200} className="w-full" />
						</div>

						<div className="flex justify-between">
							<h3 className="serif font-bold">Tema</h3>

							<p className="serif">01 de Setembro de 2025</p>
						</div>

						<h2 className={`text-2xl ${categoria == "blogs-cientificos" ? "text-(--secondary-color)" : "text-(--main-color)"}`}>Título</h2>
						<p className="serif">Assunto ou resumo</p>
					</Link>
				</div>

				<div>
					<Link href={`${categoria}/1`}>
						<div>
							<Image src={"/assets/images/placeholder.png"} alt="Blog" width={300} height={200} className="w-full" />
						</div>

						<div className="flex justify-between">
							<h3 className="serif font-bold">Tema</h3>

							<p className="serif">01 de Setembro de 2025</p>
						</div>

						<h2 className={`text-2xl ${categoria == "blogs-cientificos" ? "text-(--secondary-color)" : "text-(--main-color)"}`}>Título</h2>
						<p className="serif">Assunto ou resumo</p>
					</Link>
				</div>

				<div>
					<Link href={`${categoria}/1`}>
						<div>
							<Image src={"/assets/images/placeholder.png"} alt="Blog" width={300} height={200} className="w-full" />
						</div>

						<div className="flex justify-between">
							<h3 className="serif font-bold">Tema</h3>

							<p className="serif">01 de Setembro de 2025</p>
						</div>

						<h2 className={`text-2xl ${categoria == "blogs-cientificos" ? "text-(--secondary-color)" : "text-(--main-color)"}`}>Título</h2>
						<p className="serif">Assunto ou resumo</p>
					</Link>
				</div>
			</section>
		</main>
	);
}
