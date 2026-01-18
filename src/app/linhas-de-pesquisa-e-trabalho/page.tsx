import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Projects() {
    return (
        <main>
            <section className="max-w-360 mx-auto py-16 px-8 lg:px-16">
                <h1 className="mb-8 text-4xl text-(--main-color)">Linhas de Pesquisa e Trabalho</h1>

                <Carousel showDots={false}>
                        <div className="min-w-full px-4">
                            <h3 className="text-xl text-(--secondary-color)">Título da pesquisa</h3>

                            <p className="serif">Breve descrição da pesquisa / resumo dela</p>
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
    )
}