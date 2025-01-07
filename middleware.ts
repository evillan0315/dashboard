import { NextResponse } from 'next/server';
import { auth } from './auth';

// Allowlisted origins
const allowedOrigins = [
  'http://localhost:3000', // Development environment
  'https://yourdomain.com', // Production environment
];

export async function middleware(req: Request) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    const origin = req.headers.get('origin') || '';
    if (allowedOrigins.includes(origin)) {
      return new NextResponse(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }
    return new NextResponse('CORS not allowed for this origin.', { status: 403 });
  }

  // Handle CORS headers for other requests
  const origin = req.headers.get('origin') || '';
  const response:any = auth();

  if (allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};