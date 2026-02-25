import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function proxy(req: NextRequest) {
	const { pathname } = req.nextUrl;

	if (pathname === "/adm/login") {
		return NextResponse.next();
	}

	const token = req.cookies.get("auth")?.value;

	if (!token) {
		return NextResponse.redirect(new URL("/adm/login", req.url));
	}

	const valid = await verifyToken(token);

	if (!valid) {
		const response = NextResponse.redirect(
			new URL("/adm/login", req.url)
		);

		response.cookies.delete("auth");

		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/adm/:path*"],
};