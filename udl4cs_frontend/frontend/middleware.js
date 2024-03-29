import { NextRequest, NextResponse } from "next/server"
import {authenticateToken} from "./pages/api/auth/lib";

export async function middleware(request) {
    const token = request.cookies.get("jwt-token")?.value

    const authenticatedToken = token && await authenticateToken(token).catch((err) => {
        console.log(err)
    })

    if (authenticatedToken && request.nextUrl.startsWith("/login")) {
        return NextResponse.redirect(new URL("/resources", request.url))
    }
}
export const config = {
    matcher: ['/api/(.*)'],
}