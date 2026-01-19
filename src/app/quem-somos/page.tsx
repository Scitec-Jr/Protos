import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function AboutUs() {
	return (
		<main>
			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h1 className="text-4xl text-(--main-color)">Sobre Nós</h1>
				<p className="serif">Resumo sobre a pesquisa, com histórico e propostas (MVV)</p>
			</section>

			<section className="flex flex-col sm:flex-row gap-8 max-w-360 mx-auto p-8 lg:px-16">
				<div className="flex-1">
					<h2 className="text-4xl text-(--main-color)">Professor Responsável</h2>
					<h3 className="mb-4 text-2xl text-(--secondary-color)">Nome Sobrenome</h3>

					<p>Descrição</p>
				</div>

				<div className="flex-1">
					<Image src={"/assets/images/placeholder.png"} alt={"Foto do professor"} width={200} height={200} className="w-full h-full" />
				</div>
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h2 className="mb-8 text-4xl text-(--main-color)">Trajetória</h2>

				<Image src={"/assets/images/trajectory.png"} alt={"Trajetória"} width={1000} height={300} className="w-full lg:w-3/4 mx-auto" />
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h2 className="mb-8 text-4xl text-(--main-color)">Principais pesquisas</h2>

				<Carousel showDots={false}>
					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
                        <h3 className="serif text-(--secondary-color) text-center">Projeto 1</h3>
                        <p className="text-center">Descrição</p>
					</div>

                    <div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
                        <h3 className="serif text-(--secondary-color) text-center">Projeto 1</h3>
                        <p className="text-center">Descrição</p>
					</div>

                    <div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
                        <h3 className="serif text-(--secondary-color) text-center">Projeto 1</h3>
                        <p className="text-center">Descrição</p>
					</div>

                    <div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
                        <h3 className="serif text-(--secondary-color) text-center">Projeto 1</h3>
                        <p className="text-center">Descrição</p>
					</div>
				</Carousel>
			</section>

            <section className="max-w-360 mx-auto p-8 lg:px-16">
                <h2 className="mb-8 text-4xl text-(--main-color)">Conheça o time</h2>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/placeholder.png"} alt={"Membro do time"} width={200} height={200} className="w-full" />
                        <h3 className="serif font-bold">Nome Sobrenome</h3>
                        <h4 className="serif">Cargo</h4>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/placeholder.png"} alt={"Membro do time"} width={200} height={200} className="w-full" />
                        <h3 className="serif font-bold">Nome Sobrenome</h3>
                        <h4 className="serif">Cargo</h4>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/placeholder.png"} alt={"Membro do time"} width={200} height={200} className="w-full" />
                        <h3 className="serif font-bold">Nome Sobrenome</h3>
                        <h4 className="serif">Cargo</h4>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/placeholder.png"} alt={"Membro do time"} width={200} height={200} className="w-full" />
                        <h3 className="serif font-bold">Nome Sobrenome</h3>
                        <h4 className="serif">Cargo</h4>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/placeholder.png"} alt={"Membro do time"} width={200} height={200} className="w-full" />
                        <h3 className="serif font-bold">Nome Sobrenome</h3>
                        <h4 className="serif">Cargo</h4>
                    </div>
                </div>
            </section>
		</main>
	);
}
