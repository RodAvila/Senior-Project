import { NextRequest, NextResponse } from "next/server"
import {authenticateToken} from "./pages/api/auth/lib";

export async function middleware(request, response) {
    const token = request.cookies.get("jwt-token")?.value
    const authenticatedToken = token && await authenticateToken(token).catch((err) => {
        console.log(err)
    })

    if (authenticatedToken && (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup"))) {
        return NextResponse.redirect(new URL("/resources", request.url))
    }

    request.isAuthenticated = !!authenticatedToken
    return NextResponse.next()
}
export const config = {
    scope : "public",
    matcher: ['/', '/login', '/signup', '/resources', '/resources/(.*)', '/about']
}