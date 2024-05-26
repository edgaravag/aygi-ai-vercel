import { NextResponse } from "next/server";

export default function middleware(request) {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    console.log(request);
    
    if (!token) {
        return NextResponse.redirect(
            new URL('/', request.url)
        )
    }

  return NextResponse.next();
}

export const config = {
    matcher: '/mygarden'
}
