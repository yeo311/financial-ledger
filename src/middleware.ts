import { access } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/access')) {
    if (!request.cookies.has('accessKey')) {
      return NextResponse.redirect(new URL('/access', request.url));
    }
    const accessKey = request.cookies.get('accessKey');
    if (accessKey?.value !== process.env.ACCESS_KEY) {
      return NextResponse.redirect(new URL('/access', request.url));
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
