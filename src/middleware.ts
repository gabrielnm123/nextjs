import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authenticated = true; // Simulação de autenticação
  if (request.nextUrl.pathname.startsWith("/posts") && !authenticated) {
    console.log("Usuário não autenticado, redirecionando...");
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}