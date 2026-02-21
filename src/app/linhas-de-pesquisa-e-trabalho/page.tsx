import Carousel from "@/components/Carousel";
import Image from "next/image";

export default function Projects() {
	return (
		<main>
			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h1 className="mb-4 text-4xl text-(--main-color)">Bem-vindos ao Laboratório de Genética do Desenvolvimento!</h1>

                <h2 className="mb-4 text-2xl text-(--main-color)">Área da pesquisa</h2>

				<p className="serif">No laboratório investigamos a interação entre fatores de transcrição maternos e gap na formação do padrão de expressão estriado dos genes pair-rule. Nos últimos anos, focamos na regulação das faixas mais anteriores (faixas 1 e 2) do padrão de sete faixas de expressão. Essas faixas se formam na região correspondente à futura porção posterior da cabeça e situam-se entre duas regiões com características distintas quanto à hierarquia da cascata de segmentação: uma região anterior, na qual não se formam faixas de expressão pair-rule, e uma região posterior, correspondente ao futuro tórax e abdômen, que apresenta o padrão mais clássico da cascata de segmentação.</p>
				<br />
				<p className="serif">Investigamos, sobretudo, a atuação de fatores repressores da transcrição nessa região do embrião. Estudos genéticos realizados no laboratório, envolvendo a remoção simultânea de múltiplos fatores repressores, revelam alterações nos padrões de expressão das faixas mais anteriores, indicando a ação combinada desses fatores na delimitação anterior das faixas iniciais do padrão pair-rule e/ou na prevenção da ativação ectópica mais anterior dos MCRs responsáveis por essas faixas.</p>
				<br />
				<p className="serif">Em paralelo, iniciamos investigações que testam, inicialmente in vitro, a interação desses fatores de transcrição com sequências reguladoras, baseadas principalmente na predição de sítios de ligação para fatores de transcrição.</p>
				<br />

                <h2 className="mb-4 text-2xl text-(--main-color)">Linha de pesquisa</h2>

				<p className="serif">No laboratório investigamos a interação entre fatores de transcrição maternos e gap na formação do padrão de expressão estriado dos genes pair-rule. Nos últimos anos, focamos na regulação das faixas mais anteriores (faixas 1 e 2) do padrão de sete faixas de expressão. Essas faixas se formam na região correspondente à futura porção posterior da cabeça e situam-se entre duas regiões com características distintas quanto à hierarquia da cascata de segmentação: uma região anterior, na qual não se formam faixas de expressão pair-rule, e uma região posterior, correspondente ao futuro tórax e abdômen, que apresenta o padrão mais clássico da cascata de segmentação.</p>
				<br />
                <p className="serif">Investigamos, sobretudo, a atuação de fatores repressores da transcrição nessa região do embrião. Estudos genéticos realizados no laboratório, envolvendo a remoção simultânea de múltiplos fatores repressores, revelam alterações nos padrões de expressão das faixas mais anteriores, indicando a ação combinada desses fatores na delimitação anterior das faixas iniciais do padrão pair-rule e/ou na prevenção da ativação ectópica mais anterior dos MCRs responsáveis por essas faixas.</p>
                <br />
                <p className="serif">Em paralelo, iniciamos investigações que testam, inicialmente in vitro, a interação desses fatores de transcrição com sequências reguladoras, baseadas principalmente na predição de sítios de ligação para fatores de transcrição. Nosso objetivo é compreender mecanismos ainda pouco explorados que mediam a ação de fatores repressores nos MCRs alvo.</p>
                <br />

				<Carousel showDots={false}>
					<div className="min-w-full px-4">
						<h3 className="text-xl text-(--secondary-color)">Título da pesquisa</h3>

						<p className="serif">Breve descrição da pesquisa / resumo dela</p>
					</div>

					<div className="min-w-full px-4">
						<h3 className="text-xl text-(--secondary-color)">Título da pesquisa</h3>

						<p className="serif">Breve descrição da pesquisa / resumo dela</p>
					</div>

					<div className="min-w-full px-4">
						<h3 className="text-xl text-(--secondary-color)">Título da pesquisa</h3>

						<p className="serif">Breve descrição da pesquisa / resumo dela</p>
					</div>
				</Carousel>
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h2 className="mb-4 text-4xl text-(--main-color)">Principais pesquisas</h2>

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

			<section className="max-w-360 mx-auto py-8 px-8 lg:px-16">
				<h2 className="text-4xl text-(--secondary-color)">Disciplinas</h2>
				<p className="mb-8 serif font-bold">Matérias ministradas pelo Professor Orientador</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
					<div>
						<h3 className="text-xl text-(--main-color)">Disciplina 1</h3>
						<p className="mb-4 serif">Descrição da disciplina</p>
						<h4 className="serif">Materiais de Apoio</h4>
						<ul className="ps-8 serif list-disc">
							<li>SANTOS, Exemplo. Livro Exemplo</li>
							<li>SANTOS, Exemplo. Livro Exemplo</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl text-(--main-color)">Disciplina 1</h3>
						<p className="mb-4 serif">Descrição da disciplina</p>
						<h4 className="serif">Materiais de Apoio</h4>
						<ul className="ps-8 serif list-disc">
							<li>SANTOS, Exemplo. Livro Exemplo</li>
							<li>SANTOS, Exemplo. Livro Exemplo</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl text-(--main-color)">Disciplina 1</h3>
						<p className="mb-4 serif">Descrição da disciplina</p>
						<h4 className="serif">Materiais de Apoio</h4>
						<ul className="ps-8 serif list-disc">
							<li>SANTOS, Exemplo. Livro Exemplo</li>
							<li>SANTOS, Exemplo. Livro Exemplo</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl text-(--main-color)">Disciplina 1</h3>
						<p className="mb-4 serif">Descrição da disciplina</p>
						<h4 className="serif">Materiais de Apoio</h4>
						<ul className="ps-8 serif list-disc">
							<li>SANTOS, Exemplo. Livro Exemplo</li>
							<li>SANTOS, Exemplo. Livro Exemplo</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl text-(--main-color)">Disciplina 1</h3>
						<p className="mb-4 serif">Descrição da disciplina</p>
						<h4 className="serif">Materiais de Apoio</h4>
						<ul className="ps-8 serif list-disc">
							<li>SANTOS, Exemplo. Livro Exemplo</li>
							<li>SANTOS, Exemplo. Livro Exemplo</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl text-(--main-color)">Disciplina 1</h3>
						<p className="mb-4 serif">Descrição da disciplina</p>
						<h4 className="serif">Materiais de Apoio</h4>
						<ul className="ps-8 serif list-disc">
							<li>SANTOS, Exemplo. Livro Exemplo</li>
							<li>SANTOS, Exemplo. Livro Exemplo</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}
