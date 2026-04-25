import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // 1️⃣ Force HTTPS 
  if (url.protocol === 'http:' && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(`https://${url.host}${url.pathname}`, 301);
  }

  // 2️⃣ External Admin Redirect
  // Since the admin panel is a separate project, route any stray traffic 
  // directly to the correct external URL.
  if (url.pathname.startsWith('/admin')) {
    // Replace this with your actual admin domain (e.g., admin.uptimiseit.com)
    return NextResponse.redirect('https://admin.uptimiseit.com/admin/login', 301);
  }

  // If no conditions are met, proceed to the requested page normally
  return NextResponse.next();
}

// 3️⃣ Performance Optimization: The Matcher
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};