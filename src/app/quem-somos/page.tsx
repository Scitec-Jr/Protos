import Image from "next/image";
import Carousel from "@/components/Carousel";

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

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab1.jpg"} alt={"Pedro Henrique Teixeira Oliveira"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Pedro Henrique Teixeira Oliveira</h3>
                        <p className="serif">Olá! Sou Pedro, graduando do curso de Bacharelado em Biotecnologia da USP e bolsista de Iniciação Científica (IC) no Laboratório de Genética e Desenvolvimento desde 2025. Sou membro ativo do laboratório há 1 ano e atualmente estudo a expressão de proteína recombinante Tailless e suas interações com módulos reguladores da segmentação de Drosophila melanogaster. Além disso, também sou membro atuante da Protos Biotec Jr., a Empresa Júnior de biotecnologia da USP, na qual atualmente exerço a função de Diretor de Projetos.</p>
                        <a href="https://www.linkedin.com/in/pedro-henrique-teixeira-oliveira-942328274/" className="serif font-bold underline underline-offset-2 text-blue-600">Linkedin</a>
                        <a href="http://lattes.cnpq.br/1152714137159638" className="serif font-bold underline underline-offset-2 text-blue-600">Currículo Lattes</a>
                        <a href="mailto:pedroteixeira1008@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab2.jpg"} alt={"Isabela de Paula dos Santos"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Isabela de Paula dos Santos</h3>
                        <p className="serif">Olá! Sou Isabela, graduanda do curso de Bacharelado em Biotecnologia da USP e bolsista de Iniciação Científica (IC) no Laboratório de Genética e Desenvolvimento. Ainda sou nova por aqui, entrei como membro efetivo no laboratório ainda este ano. Entretanto, minha experiência laboratorial não começa por aqui. Possuo experiências anteriores como bolsista de Iniciação Científica (IC) no Departamento de Genética e Evolução da Universidade Federal de São Carlos (UFSCar), onde desenvolvi pesquisas com enfoque em dimorfismo do tamanho sexual em abelhas e vespas e extração de DNA do ar (eDNA).</p>
                        <a href="https://www.linkedin.com/in/isabela-de-paula-3b9166367?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="serif font-bold underline underline-offset-2 text-blue-600">Linkedin</a>
                        <a href="http://lattes.cnpq.br/2929698019663332" className="serif font-bold underline underline-offset-2 text-blue-600">Currículo Lattes</a>
                        <a href="mailto:isapsantos@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab3.jpg"} alt={"Antonio Garbatti Gutierrez Ratto"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Antonio Garbatti Gutierrez Ratto</h3>
                        <p className="serif">Olá! Sou Antonio, graduando do curso de Bacharelado em Biotecnologia da USP e membro do Laboratório de Genética e Desenvolvimento há 1 ano, atuando como voluntário de pesquisa. Atualmente, desenvolvo um projeto focado no papel dos fatores de transcrição repressores da cascata de segmentação na região anterior da blastoderme sincicial de Drosophila melanogaster.</p>
                        <a href="http://www.linkedin.com/in/antonio-garbatti-gutierrez-ratto-475515287" className="serif font-bold underline underline-offset-2 text-blue-600">Linkedin</a>
                        <a href="mailto:antoniogratto@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab4.jpg"} alt={"Guilherme Ciciliati Lopes"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Guilherme Ciciliati Lopes</h3>
                        <p className="serif">Olá! Sou Guilherme, graduado em Biotecnologia e membro do Laboratório de Genética e Desenvolvimento há 3 anos. Ao longo desse período, desenvolvi duas pesquisas de Iniciação Científica (IC) sob orientação do professor Andrioli e, em 2026, iniciarei meu mestrado no laboratório. Atualmente, minha pesquisa investiga a interação entre o fator de transcrição Slp1 e o módulo cis-regulador even-skipped 1 da cascata de segmentação de Drosophila melanogaster. Possuo formação técnica em farmácia e minha primeira pesquisa no laboratório envolveu a identificação de sítios de ligação do fator de transcrição Tailless.</p>
                        <a href="http://lattes.cnpq.br/7351197122455518" className="serif font-bold underline underline-offset-2 text-blue-600">Currículo Lattes</a>
                        <a href="mailto:lopes2002@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab5.jpg"} alt={"Lucas Beltrami"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Lucas Beltrami</h3>
                        <p className="serif">Olá! Sou Lucas, Técnico de Laboratório e membro do Laboratório de Genética e Desenvolvimento desde 2016. Atuo no suporte técnico e na execução de experimentos laboratoriais, contribuindo para o desenvolvimento das pesquisas do grupo. Atualmente, participo de experimentos genéticos voltados à investigação de fatores repressores da transcrição na regulação do gene Kruppel, envolvido na segmentação de Drosophila melanogaster.</p>
                        <a href="mailto:lucas.beltrami@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab6.jpg"} alt={"Julia Alice dos Santos"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Julia Alice dos Santos</h3>
                        <p className="serif">Olá! Sou Julia Alice, graduanda do curso de Bacharelado em Biotecnologia da USP e bolsista de Iniciação Científica (IC), integrante do Laboratório de Genética e Desenvolvimento desde 2025. Apesar de ainda estar em fase inicial no laboratório, participo ativamente das atividades de pesquisa e formação científica do grupo. No momento, meu projeto de pesquisa ainda está em definição</p>
                        <a href="https://www.linkedin.com/in/julia-alice-686847230" className="serif font-bold underline underline-offset-2 text-blue-600">Linkedin</a>
                        <a href="https://lattes.cnpq.br/9424713727594187" className="serif font-bold underline underline-offset-2 text-blue-600">Currículo Lattes</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab7.jpg"} alt={"Heloisa Gonçalves de Jesus"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Heloisa Gonçalves de Jesus</h3>
                        <p className="serif">Olá, sou Heloisa Gonçalves, graduanda do curso de Bacharelado em Biotecnologia da USP e bolsista de Iniciação Científica (IC) pela FAPESP. Faço parte do Laboratório há dois anos e meio e atualmente estudo a regulação da expressão do gene Krüppel na cascata de segmentação de Drosophila melanogaster, com foco na investigação de repressores adicionais na região anterior do embrião.</p>
                        <a href="http://lattes.cnpq.br/3193466675222251" className="serif font-bold underline underline-offset-2 text-blue-600">Currículo Lattes</a>
                        <a href="mailto:heloisajesus@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab8.jpg"} alt={"Emanuelli Ferreira da Silva"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Emanuelli Ferreira da Silva</h3>
                        <p className="serif">Olá, sou Emanuelli Ferreira, graduanda do curso de Bacharelado em Biotecnologia da USP e aluna de Iniciação Científica (IC). Faço parte do Laboratório há seis meses e estou desenvolvendo análises bioinformáticas voltadas à fatores de transcrição da regulação gênica de Drosophila melanogaster. Minhas atividades incluem a organização de dados, construção de planilhas e ferramentas auxiliares para o estudo de sítios de ligação de fatores de transcrição, com apoio de bases de dados especializadas e métodos computacionais.</p>
                        <a href="mailto:emanuelli.ferreira@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>

                    <div className="flex flex-col items-center w-50">
                        <Image src={"/assets/images/colab9.jpg"} alt={"Carolina Acosta Zavata"} width={200} height={265} className="w-full h-60" />
                        <h3 className="my-2 serif font-bold text-center">Carolina Acosta Zavata</h3>
                        <p className="serif">Olá, sou Carolina Zavata, graduanda do curso de Bacharelado em Biotecnologia da USP e bolsista de Iniciação Científica (IC). Faço parte do Laboratório há dois anos e desenvolvo um projeto que busca identificar padrões que revelem propriedades associadas à atuação de fatores de transcrição da cascata de segmentação de Drosophila melanogaster, com ênfase nos módulos cis-regulatórios envolvidos na formação das faixas pair-rule 1 e 5. Além disso, também sou membro atuante da Protos Biotec Jr., a Empresa Júnior de biotecnologia da USP, na qual atualmente exerço a função de Gerente do Administrativo.</p>
                        <a href="mailto:carolinazavata@usp.br" className="serif font-bold underline underline-offset-2 text-blue-600">E-mail</a>
                    </div>
                </div>
            </section>
		</main>
	);
}
