import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

const locales = ['en-US', 'fa']
const defaultLocale = 'en-US'

function getLocale(request) {
  const cookieLang = request.cookies.get('language')?.value
  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang
  }

  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') || defaultLocale,
    },
  })

  const languages = negotiator.languages().map(lang => {
    switch (lang.toLowerCase()) {
      case 'fa': return 'fa'
      case 'en': return 'en-US'
      default: return lang
    }
  })

  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname
  const cookieLang = request.cookies.get('language')?.value

  // Handle /en → redirect to /
  if (pathname.startsWith('/en')) {
    if (cookieLang !== 'en-US') {
      const response = NextResponse.redirect(new URL(pathname.replace(/^\/en/, '') || '/', request.url))
      response.cookies.set('language', 'en-US', { path: '/', maxAge: 31536000 })
      return response
    }
    return NextResponse.next()  // No change needed if the cookie already matches
  }

  // Handle /fa → check if cookie is not 'fa' and update it if necessary
  if (pathname.startsWith('/fa')) {
    if (cookieLang !== 'fa') {
      const response = NextResponse.next()
      response.cookies.set('language', 'fa', { path: '/', maxAge: 31536000 })
      return response
    }
    return NextResponse.next()  // No change needed if the cookie already matches
  }

  // If the user is on the home route or an unrecognized route, determine language from path
  if (pathname === '/' || pathname.startsWith('/en') || pathname.startsWith('/fa')) {
    if (pathname.startsWith('/fa') && cookieLang !== 'fa') {
      const response = NextResponse.redirect(new URL('/fa' + pathname.slice(3), request.url))
      response.cookies.set('language', 'fa', { path: '/', maxAge: 31536000 })
      return response
    }
    if (pathname.startsWith('/en') && cookieLang !== 'en-US') {
      const response = NextResponse.redirect(new URL('/en' + pathname.slice(3), request.url))
      response.cookies.set('language', 'en-US', { path: '/', maxAge: 31536000 })
      return response
    }
  }

  // If user is not on a /en or /fa path, determine language from cookie or browser
  const detectedLocale = getLocale(request)

  if (detectedLocale === 'fa') {
    const newUrl = new URL(`/fa${pathname}`, request.url)
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('language', 'fa', { path: '/', maxAge: 31536000 })
    return response
  }

  const response = NextResponse.rewrite(new URL(`/en${pathname}`, request.url))
  response.cookies.set('language', 'en-US', { path: '/', maxAge: 31536000 })
  return response
}

export const config = {
  matcher: [
    '/((?!_next|fa|api|favicon.ico|fonts|images).*)',
    '/en/:path*',
  ]
}
