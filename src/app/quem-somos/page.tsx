import Image from "next/image";
import Carousel from "@/components/Carousel";
import MemberSection from "@/components/MemberSection";

export default function AboutUs() {
	return (
		<main>
			<section className="max-w-360 mx-auto p-8 pb-0 lg:px-16">
				<h1 className="text-4xl text-(--main-color)">Sobre Nós</h1>
				<p className="serif">Nosso objetivo é compreender mecanismos ainda pouco explorados que mediam a ação de fatores repressores nos MCRs alvo.</p>
			</section>

			<section className="flex flex-col sm:flex-row gap-8 max-w-360 mx-auto p-8 lg:px-16">
				<div className="flex-1">
					<h2 className="text-4xl text-(--main-color)">Professor Responsável</h2>
					<h3 className="mb-4 text-2xl text-(--secondary-color)">Nome Sobrenome</h3>

					<p>Sou professor da Escola de Artes, Ciências e Humanidades (EACH) da Universidade de São Paulo (USP), em São Paulo. Na EACH, ministro disciplinas de Biologia Celular, Biologia Molecular e Biologia do Desenvolvimento nos cursos de Licenciatura em Ciências da Natureza e de Biotecnologia. O Laboratório de Biologia do Desenvolvimento da EACH foi criado logo após minha contratação como docente, em 2008.</p>
                    <br />
                    <p>Sou biólogo, com mestrado em Genética e doutorado em Bioquímica pela USP. Realizei pós-doutorado em Biologia do Desenvolvimento na New York University, período no qual consolidei minha atuação nessa área e iniciei meus estudos sobre os mecanismos de regulação da transcrição que operam na cascata de segmentação de Drosophila.</p>
                    <br />
                    <p>Sou biólogo por formação e vocação. A investigação da vida em nível molecular sempre me fascinou, e sigo feliz entre bancadas e experimentos; no tempo livre, quando possível, assumo o papel de um naturalista típico: já fui aquarista, gosto de observar aves e dizem que sou um bom jardineiro, ao menos quando o assunto são cactos e suculentas.</p>
				</div>

				<div className="flex-1">
					<Image src={"/assets/images/placeholder.png"} alt={"Foto do professor"} width={200} height={200} className="w-full h-full" />
				</div>
			</section>

            <section className="max-w-360 mx-auto p-8 lg:px-16">
                <h2 className="mb-8 text-4xl text-(--main-color)">Conheça o time</h2>

                <MemberSection />
            </section>
		</main>
	);
}
