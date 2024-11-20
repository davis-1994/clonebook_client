import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/user'];
const publicRoutes = ['/', '/register'];

export const middleware = async (req) => {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get('session')?.value;

  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL('/user', req.nextUrl));
  }

  return NextResponse.next();
};
