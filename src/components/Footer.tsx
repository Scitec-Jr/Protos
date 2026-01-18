import Image from "next/image";

export default function Footer() {
	return (
		<footer className="px-8 py-12 bg-(--main-color) text-white">
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-200 mx-auto">
				<div className="flex flex-wrap justify-center gap-8">
					<a href="">xxxxx@gmail.com</a>

					<a href="">(xx) xxxxx-xxxx</a>
				</div>

				<div className="flex gap-4 sm:gap-16">
					<a href="">
                        <Image src={"/assets/icons/facebook.png"} alt="Facebook" width={32} height={32} />
                    </a>

					<a href="">
                        <Image src={"/assets/icons/linkedin.png"} alt="Facebook" width={32} height={32} />
                    </a>

					<a href="">
                        <Image src={"/assets/icons/instagram.png"} alt="Facebook" width={32} height={32} />
                    </a>
				</div>
			</div>
		</footer>
	);
}
