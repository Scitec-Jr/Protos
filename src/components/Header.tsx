"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import HeaderLink from "@/components/HeaderLink";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function Header() {
	const [open, setOpen] = useState(false);

	const pathname = usePathname();

	const blogsActive = pathname.startsWith(`/nossos-blogs`);

	return (
		<header className="relative py-2 px-8 lg:px-16 bg-(--main-color) text-(--light-color) text-sm z-50">
			{/* Menu padrão */}
			<nav className="flex items-center max-w-360 mx-auto">
				<HeaderLink href="/" className="mr-auto">
					<Image src="/assets/global/logo.png" alt="Protos" width={52} height={50} />
				</HeaderLink>

				<button type="button" onClick={() => setOpen((prev) => !prev)} className="sm:hidden" aria-expanded={open} aria-label="Abrir menu">
					<Image src="/assets/global/menu.png" alt="Menu" width={44} height={44} className="cursor-pointer" />
				</button>

				<div className="hidden sm:flex gap-8 md:gap-16 items-center">
					<HeaderLink href="/">Home</HeaderLink>

					<HeaderLink href="/linhas-de-pesquisa-e-trabalho">Projeto</HeaderLink>

					<HeaderLink href="/quem-somos">Quem Somos</HeaderLink>

					<HeaderLink href="/nossa-galeria">Galeria</HeaderLink>

					<Dropdown trigger="Nossos Blogs" active={blogsActive}>
						<div className="flex flex-col gap-2">
							<HeaderLink href="/nossos-blogs/blogs-cientificos">Blogs Científicos</HeaderLink>

							<HeaderLink href="/nossos-blogs/blogs-de-conteudo">Blogs de Conteúdo</HeaderLink>
						</div>
					</Dropdown>
				</div>
			</nav>

			{/* Menu mobile */}
			<nav
				className={`sm:hidden absolute left-0 right-0 top-full z-50 bg-(--main-color) transition-all duration-300 ease-out
                ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
				<div className="flex flex-col gap-4 p-4">
					<HeaderLink href="/">Home</HeaderLink>

					<HeaderLink href="/linhas-de-pesquisa-e-trabalho">Projeto</HeaderLink>

					<HeaderLink href="/quem-somos">Quem Somos</HeaderLink>

					<HeaderLink href="/nossa-galeria">Galeria</HeaderLink>

					<Dropdown trigger="Nossos Blogs" active={blogsActive}>
						<div className="flex flex-col gap-2">
							<HeaderLink href="/nossos-blogs/blogs-cientificos">Blogs Científicos</HeaderLink>

							<HeaderLink href="/nossos-blogs/blogs-de-conteudo">Blogs de Conteúdo</HeaderLink>
						</div>
					</Dropdown>
				</div>
			</nav>
		</header>
	);
}
