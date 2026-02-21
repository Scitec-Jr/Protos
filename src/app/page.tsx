import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function Home() {
	return (
		<main>
			<section className="flex flex-col sm:flex-row gap-4 sm:gap-8 max-w-360 mx-auto p-8 lg:p-16">
				<div className="flex-1">
					<h1 className="mb-4 text-4xl text-(--main-color)">Laboratório de Genética do Desenvolvimento</h1>

					<h2 className="mb-4 text-2xl text-(--main-color)">Sobre o laboratório</h2>

					<p className="serif">No Laboratório de Genética do Desenvolvimento estudamos a cascata de segmentação do organismo modelo Drosophila melanogaster (mosca-das-frutas), para investigar mecanismos de transcrição diferencial. Essa cascata é constituída majoritariamente por fatores de transcrição que instruem para a divisão do corpo em segmentos, característica típica do corpo dos insetos.</p>
                    <br />

					<h2 className="mb-4 text-2xl text-(--main-color)">Base científica</h2>

					<p className="serif">A diferenciação celular é um processo fundamental para o desenvolvimento e a manutenção da vida em organismos multicelulares. Por meio dela, as células adquirem identidades específicas e se especializam funcionalmente, permitindo a divisão de tarefas necessária ao funcionamento integrado de tecidos e órgãos.</p>
					<br />
					<p className="serif">No nível molecular, a diferenciação celular é determinada pela regulação da expressão gênica: diferentes tipos celulares ativam conjuntos específicos de genes, estabelecendo padrões espaciais e temporais precisos de expressão. Entre os mecanismos diretamente responsáveis pela diferenciação, destaca-se a transcrição diferencial, que constitui a etapa inicial e o principal nível de controle do funcionamento dos genes.</p>
					<br />

					<h2 className="mb-4 text-2xl text-(--main-color)">Nossas áreas de interesse</h2>

					<p className="serif">Nossa abordagem experimental é multidisciplinar e incorpora genética molecular, microscopia, bioquímica e bioinformática. Nossos interesses concentram-se nas redes transcricionais e mecanismos moleculares que atuam ao longo da cascata de segmentação.</p>
					<br />
				</div>

				<div className="flex-1">
                    <h2 className="mb-4 text-2xl text-(--main-color)">Publicações</h2>

                    <div className="flex flex-wrap justify-center gap-4 bg-(--secondary-color) p-4 rounded-lg">
                        <Link href={"/nossos-blogs/blog-de-conteudo/1"} className="relative flex flex-col justify-end h-full">
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />

							<div className="absolute bottom-4 left-4 z-10">
								<h3 className="text-lg serif">Postagem em Destaque</h3>
								<p>11/10/2025</p>
							</div>
						</Link>

                        <Link href={"/nossos-blogs/blog-de-conteudo/1"} className="relative flex flex-col justify-end h-full">
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />

							<div className="absolute bottom-4 left-4 z-10">
								<h3 className="text-lg serif">Postagem em Destaque</h3>
								<p>11/10/2025</p>
							</div>
						</Link>

                        <Link href={"/nossos-blogs/blog-de-conteudo/1"} className="relative flex flex-col justify-end h-full">
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />

							<div className="absolute bottom-4 left-4 z-10">
								<h3 className="text-lg serif">Postagem em Destaque</h3>
								<p>11/10/2025</p>
							</div>
						</Link>

                        <Link href={"/nossos-blogs/blog-de-conteudo/1"} className="relative flex flex-col justify-end h-full">
							<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />

							<div className="absolute bottom-4 left-4 z-10">
								<h3 className="text-lg serif">Postagem em Destaque</h3>
								<p>11/10/2025</p>
							</div>
						</Link>
                    </div>
                </div>
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<div className="flex justify-between mb-4">
					<h2 className="text-4xl text-(--main-color)">Galeria de Fotos</h2>

					<Link href={"/nossa-galeria"} className="py-2 px-4 bg-(--secondary-color) text-(--main-color)">
						Saber mais
					</Link>
				</div>

				<Carousel>
					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%]">
						<Image src={"/assets/images/placeholder.png"} alt="Blog em destaque" width={500} height={300} className="w-full h-full" />
					</div>
				</Carousel>
			</section>
		</main>
	);
}
