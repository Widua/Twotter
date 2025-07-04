import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { cookies } from "next/headers";

const publicRoutes = ['/', '/login', '/register']
const protectedRoutes = ['/home']

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname
	const isProtectedRoute = protectedRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	const cookie = (await cookies()).get('session')?.value
	const session = await decrypt(cookie)

	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/login', req.nextUrl))
	}

	if (
		isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/home')
	) {
		return NextResponse.redirect(new URL('/home', req.nextUrl))
	}
	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
