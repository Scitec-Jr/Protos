"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = Omit<LinkProps, "href"> & {
	href: string;
	children: ReactNode;
	activeClassName?: string;
	className?: string;
};

export default function HeaderLink({ href, children, activeClassName = "text-white", className = "", ...props }: Props) {
	const pathname = usePathname();

	const isHome = href === "/";

	const isActive = isHome ?  pathname === `/` : pathname === href || pathname.startsWith(`${href}/`);

	const finalClassName = `
    ${className}
    ${isActive ? activeClassName : ""}
  `.trim();

	return (
		<Link href={href} className={finalClassName} {...props}>
			{children}
		</Link>
	);
}
