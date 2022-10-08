import {withAuth} from "next-auth/middleware"
import {NextRequest, NextResponse} from "next/server";

export default withAuth(
  function middleware(req) {
    // return NextResponse
    console.log(req.nextauth.token);
    console.log(req.nextUrl.pathname)
    if (req.nextUrl.pathname === "/signIn") {
      const url=req.nextUrl.clone();
      url.pathname="/posts";
      console.log(req.url)
      return NextResponse.rewrite(url);
    }
  },
  {
    callbacks: {
      jwt({token}) {
        return token?.role === "admin";
      },
    },
  }
);

export const config = {matcher: ["/", "/posts", "/users"]};
