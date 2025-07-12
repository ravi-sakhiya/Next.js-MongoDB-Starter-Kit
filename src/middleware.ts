import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/register',
    '/api/auth/login',
    '/api/auth/register',
  ];

  // API routes that don't require authentication
  const publicApiRoutes = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/refresh',
  ];

  // Check if it's a public route
  if (
    publicRoutes.includes(pathname) ||
    publicApiRoutes.some(route => pathname.startsWith(route))
  ) {
    return NextResponse.next();
  }

  // Check if it's an API route that requires authentication
  if (
    pathname.startsWith('/api/') &&
    !publicApiRoutes.some(route => pathname.startsWith(route))
  ) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return NextResponse.json(
        { message: 'Authorization header required' },
        { status: 401 }
      );
    }

    // For now, just check if the header exists
    // Token validation will be handled in the API routes
    if (!authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Invalid authorization header format' },
        { status: 401 }
      );
    }

    return NextResponse.next();
  }

  // Check if it's a protected page route
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      // Redirect to login for protected pages
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // For now, just check if the header exists
    if (!authHeader.startsWith('Bearer ')) {
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
