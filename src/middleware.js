import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'

// Define supported locales with proper BCP 47 tags
const locales = ['en-US', 'fa-IR']
const defaultLocale = 'en-US'

function getLocale(request) {
  try {
    const negotiator = new Negotiator({
      headers: {
        'accept-language': request.headers.get('accept-language') || defaultLocale
      }
    })
    
    // Normalize language codes consistently
    const languages = negotiator.languages().map(lang => {
      switch(lang.toLowerCase()) {
        case 'fa': return 'fa-IR'
        case 'en': return 'en-US'
        default: return lang
      }
    })
    
    return match(languages, locales, defaultLocale)
  } catch (error) {
    console.error('Locale matching error:', error instanceof Error ? error.message : String(error))
    return defaultLocale
  }
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname
  
  // Redirect /en paths to root
  if (pathname.startsWith('/en')) {
    const newPath = pathname.replace(/^\/en/, '') || '/'
    const newUrl = new URL(newPath, request.url)
    return NextResponse.redirect(newUrl)
  }

  // Skip if path already starts with /fa
  if (pathname.startsWith('/fa')) {
    return
  }

  const locale = getLocale(request).split('-')[0]

  if (locale === 'en') {
    // Internal rewrite to /en while keeping URL as-is
    const newUrl = new URL(`/en${pathname}`, request.url)
    return NextResponse.rewrite(newUrl)
  }

  // Redirect for non-English locales
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Match all paths except those starting with /fa and static assets
    '/((?!fa|_next|api|favicon.ico).*)',
    '/en/:path*'
  ]
}