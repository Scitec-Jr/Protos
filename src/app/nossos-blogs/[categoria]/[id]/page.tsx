import Image from "next/image";
import Link from "next/link";

type PageParams = {
    params: Promise<{
        categoria: "blogs-cientificos" | "blogs-de-conteudo",
        id: number
    }>
}

export default async function Blog({params}: PageParams) {
    const categoria = (await params).categoria;

    return (
        <main>
            <section className="max-w-360 mx-auto p-8 lg:px-16">
                <Link href={`/nossos-blogs/${categoria}`} className="block mb-8 text-xl serif text-(--main-color) font-bold">&lt; Retornar</Link>

                <h1 className="mb-8 text-4xl text-(--main-color) text-center">Título do artigo</h1>

                <div className="sm:w-3/4 mx-auto">
                    <h2 className="text-lg serif text-(--secondary-color) font-bold">Tema do Artigo</h2>
                    <p className="mb-4 text-zinc-700">quinta-feira, 15 de janeiro de 2026</p>

                    <p className="mb-4 serif text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae asperiores id maiores eligendi ex tempore eveniet, tempora quas earum doloremque natus at alias eius vel? Deleniti aliquam hic possimus cum, aut delectus expedita quibusdam voluptatibus omnis necessitatibus molestias perspiciatis voluptate. Omnis repudiandae odit mollitia quas pariatur asperiores exercitationem, nihil illum ad enim. Magnam nemo atque nihil, officia labore molestiae quos? Velit, consequatur atque. Sapiente sit laborum quisquam quis totam eum reprehenderit harum consectetur vero veniam? Consequuntur nemo, animi esse deserunt itaque corporis iure soluta architecto ratione quisquam aspernatur, rerum, necessitatibus quod error officia quis nobis! Laudantium repellendus id dolor tempore, a magni ipsam, fuga iusto delectus distinctio deleniti, aliquam modi nisi? Dolor assumenda, adipisci, praesentium voluptatum illum quisquam eius minima repudiandae incidunt accusamus labore qui velit. Doloremque nam cumque officiis fugit dolore repudiandae ipsa velit dicta asperiores sed. Qui harum nesciunt est non ducimus magni quis nihil repellendus eveniet nulla facere rerum voluptatibus quidem dignissimos quod dolorum, commodi aperiam! Cum quibusdam distinctio laudantium veritatis rem odit quasi, impedit nisi necessitatibus voluptate quas assumenda error animi, reprehenderit reiciendis ipsa iusto eum ratione! Laborum pariatur est earum error repudiandae perspiciatis unde maxime doloremque neque magnam explicabo beatae dolorum quibusdam voluptate ducimus, sunt ea fugiat labore in molestias? Quam similique excepturi perspiciatis quibusdam laborum. Temporibus voluptas necessitatibus eos ullam explicabo amet fugiat quod nulla numquam molestias. Doloremque illo facilis sunt laborum odit mollitia eos iste maiores impedit ab alias, placeat similique officiis praesentium dignissimos! Vel iure, modi inventore repellendus sapiente cumque voluptate iusto enim, velit, voluptatibus sunt libero nisi error optio. Error consectetur obcaecati cupiditate in tenetur, sequi dolore ducimus hic deleniti. Perspiciatis maxime repudiandae, architecto velit iure voluptates officiis, hic aut animi in earum perferendis reprehenderit laborum! Doloremque ex ratione facere placeat odit vitae provident, fugiat voluptate dolore eum sint deleniti velit.</p>

                    <Image src={"/assets/images/placeholder.png"} alt="Imagem Blog" width={400} height={200} className="mx-auto mb-4" />

                    <h3 className="mb-4 text-2xl text-(--main-color) text-center">Tópico</h3>

                    <p className="mb-8 serif text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi non, assumenda iste maiores eaque officiis in, tempora quas, dicta fugit officia odit ex dignissimos commodi tenetur perferendis aperiam? Placeat alias dolor sunt doloremque distinctio unde animi similique porro ad ex quisquam exercitationem quam provident dolorum vero illo nulla iure, iste dignissimos perferendis labore deserunt dicta. Excepturi sapiente, qui delectus aliquid recusandae beatae reiciendis, consectetur eos natus, veritatis aut minima. Qui nam distinctio rerum saepe dolorum mollitia exercitationem laudantium tempore illo, veritatis odio soluta vitae asperiores? Ipsam, voluptate, laborum ducimus delectus animi dolore, beatae quasi quidem omnis doloribus maxime autem aspernatur?</p>

                    <p className="font-bold">Autoria de: Exemplo De Tal</p>
                    <p>Fontes: links, bibliografia</p>
                </div>
            </section>

            <section className="max-w-360 mx-auto p-8 lg:px-16">
                <h2 className="mb-4 text-4xl text-(--main-color)">Artigos relacionados</h2>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-80">
                        <Image src={"/assets/images/placeholder.png"} alt="Artigos relacionados" width={300} height={150} className="w-full mb-4" />

                        <div className="flex justify-between">
                            <h4 className="serif font-bol">Tema</h4>

                            <p className="serif font-zinc-400">01 de Setembro de 2025</p>
                        </div>

                        <h3 className="text-xl text-(--main-color)">Título</h3>

                        <p className="serif">Assunto ou resumo</p>
                    </div>

                    <div className="w-80">
                        <Image src={"/assets/images/placeholder.png"} alt="Artigos relacionados" width={300} height={150} className="w-full mb-4" />

                        <div className="flex justify-between">
                            <h4 className="serif font-bol">Tema</h4>

                            <p className="serif font-zinc-400">01 de Setembro de 2025</p>
                        </div>

                        <h3 className="text-xl text-(--main-color)">Título</h3>

                        <p className="serif">Assunto ou resumo</p>
                    </div>

                    <div className="w-80">
                        <Image src={"/assets/images/placeholder.png"} alt="Artigos relacionados" width={300} height={150} className="w-full mb-4" />

                        <div className="flex justify-between">
                            <h4 className="serif font-bol">Tema</h4>

                            <p className="serif font-zinc-400">01 de Setembro de 2025</p>
                        </div>

                        <h3 className="text-xl text-(--main-color)">Título</h3>

                        <p className="serif">Assunto ou resumo</p>
                    </div>
                </div>
            </section>
        </main>
    )
}