import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Gallery() {
	return (
		<main>
			<section className="max-w-360 mx-auto pt-16 p-8 lg:px-8">
				<h2 className="text-4xl font-bold">Nossa Galeria</h2>
				<h3 className="mb-4 text-xl">Laboratório</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={500} height={200} className="col-span-1 md:col-span-2 w-full h-60" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={500} height={200} className="col-span-1 sm:col-span-1 w-full h-60" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={500} height={200} className="w-full h-60" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={500} height={200} className="w-full h-60" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={500} height={200} className="w-full h-60" />
				</div>
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h2 className="mb-4 text-lg">Projeto</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={200} height={200} className="w-full" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={200} height={200} className="w-full" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={200} height={200} className="w-full" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={200} height={200} className="w-full" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={200} height={200} className="w-full" />

					<Image src={"/assets/images/placeholder.png"} alt={"Galeria"} width={200} height={200} className="w-full" />
				</div>
			</section>

			<section className="max-w-360 mx-auto p-8 lg:px-16">
				<h2 className="mb-4 text-xl">Cactos</h2>

				<Carousel showDots={false}>
					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
					</div>

					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
					</div>

					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
					</div>

					<div className="min-w-full md:min-w-auto md:flex-[0_0_50%] lg:flex-[0_0_33.34%] px-4">
						<Image src={"/assets/images/placeholder.png"} alt="Projeto" width={300} height={300} className="h-50 mb-4 mx-auto" />
					</div>
				</Carousel>
			</section>
		</main>
	);
}
