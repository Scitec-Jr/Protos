import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function Home() {
	return (
		<main>
			<section className="flex flex-col sm:flex-row max-w-360 mx-auto">
				<div className="flex flex-col items-center sm:items-start justify-center flex-1 py-8 ps-8 lg:ps-16">
					<h1 className="text-6xl text-(--main-color)">PROTOS</h1>
					<h2 className="text-xl serif">Slogan ou frase inicial</h2>
				</div>

				<div className="flex-1">
					<Image src={"/assets/images/placeholder.png"} alt="Placeholder" width={400} height={400} className="w-full" />
				</div>
			</section>

			<section className="flex flex-wrap justify-center gap-8 md:gap-16 pt-16 p-8 lg:px-16">
				<div className="flex flex-col items-center w-60">
					<Image src={"/assets/images/placeholder.png"} alt="Placeholder" width={200} height={200} className="w-full mb-4" />
					<h2 className="serif font-bold text-(--main-color)">Valor de n1</h2>
					<p className="serif">Descrição</p>
				</div>

				<div className="flex flex-col items-center w-60">
					<Image src={"/assets/images/placeholder.png"} alt="Placeholder" width={200} height={200} className="w-full mb-4" />
					<h2 className="serif font-bold text-(--main-color)">Valor de n1</h2>
					<p className="serif">Descrição</p>
				</div>

				<div className="flex flex-col items-center w-60">
					<Image src={"/assets/images/placeholder.png"} alt="Placeholder" width={200} height={200} className="w-full mb-4" />
					<h2 className="serif font-bold text-(--main-color)">Valor de n1</h2>
					<p className="serif">Descrição</p>
				</div>
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h2 className="text-4xl text-(--main-color)">Postagens recentes</h2>
				<p className="serif">Descubra mais sobre nossa atuação!</p>

				<div className="grid grid-cols-12 gap-4 bg-(--secondary-color) p-4">
					<div className="row-span-2 col-span-12 md:col-span-7">
						<Link href={"/nossos-blogs/blog-de-conteudo/1"} className="relative flex flex-col justify-end h-full">
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />

							<div className="absolute bottom-4 left-4 z-10">
                                <h3 className="text-lg serif">Postagem em Destaque</h3>
							    <p>11/10/2025</p>
                            </div>
						</Link>
					</div>

					<div className="col-span-8 sm:col-span-4 md:col-span-3">
						<Link href={"/nossos-blogs/blog-cientifico/1"}>
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={250} height={150} className="w-full h-full" />
						</Link>
					</div>

					<div className="col-span-4 sm:col-span-2 md:col-span-2 flex items-center text-(--main-color)">
						<Link href={"/nossos-blogs/blog-cientifico"}>Blog Científico &gt;</Link>
					</div>

					<div className="col-span-8 sm:col-span-4 md:col-span-3">
						<Link href={"/nossos-blogs/blog-de-conteudo/1"}>
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={250} height={150} className="w-full h-full" />
						</Link>
					</div>

					<div className="col-span-4 sm:col-span-2 md:col-span-2 flex items-center text-(--main-color)">
						<Link href={"/nossos-blogs/blog-de-conteudo"}>Blog de Conteúdo &gt;</Link>
					</div>
				</div>
			</section>

            <section className="max-w-360 mx-auto p-8 lg:px-16">
                <div className="flex justify-between mb-4">
                    <h2 className="text-4xl text-(--main-color)">Galeria de Fotos</h2>

                    <Link href={"/nossa-galeria"} className="py-2 px-4 bg-(--secondary-color) text-(--main-color)">Saber mais</Link>
                </div>

                <Carousel>
                    <div className="flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
                    <div className="flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
                    <div className="flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
                    <div className="flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
                </Carousel>
            </section>
		</main>
	);
}
