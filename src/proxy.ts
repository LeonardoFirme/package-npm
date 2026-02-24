// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Leonardo Firme - Professional Proxy Layer
 * Substitui o Middleware descontinuado no NextJS 16+
 */
export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;

  // Proteção de rotas para ambiente ERP/SaaS
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Header de segurança para Tailwind CSS v4 e Frames
  const response = NextResponse.next();
  response.headers.set('x-v0-digital-proxy', 'active');

  return response;
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};