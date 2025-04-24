'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/language-context'
import { usePathname } from 'next/navigation'
import steve from '../../../public/images/Steve_Jobs.jpg'
import winston from '../../../public/images/churchil.webp'
import frank from '../../../public/images/roosevelt.jpg'
type Quote = {
  text: string
  author: string
  image: any
  wikiLink: string
  isReversed?: boolean
}

export default function Inspiration () {
  const pathname = usePathname()
  const isFarsi = pathname.startsWith('/fa')
  const { dict } = useLanguage()
  const quotes: Quote[] = [
    {
      text: '“Success is not final, failure is not fatal: It is the courage to continue that counts.”',
      author: 'Winston Churchill',
      image: winston,
      wikiLink: 'https://en.wikipedia.org/wiki/Winston_Churchill'
    },
    {
      text: '“The only way to do great work is to love what you do.”',
      author: 'Steve Jobs',
      image: steve,
      wikiLink: 'https://en.wikipedia.org/wiki/Steve_Jobs',
      isReversed: true
    },
    {
      text: '“The only limit to our realization of tomorrow is our doubts of today.”',
      author: 'Franklin D. Roosevelt',
      image: frank,
      wikiLink: 'https://en.wikipedia.org/wiki/Franklin_D._Roosevelt'
    }
  ]
  return (
    <section id='inspiration' className='py-16'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold flex justify-center'>
          {dict.language === 'en' ? 'Inspirations' : 'الهامات'}
        </h2>
        {/*TODO <div className="text-sm text-nowrap flex my-2 justify-center">
          <Link
            href={isFarsi ? '/fa/inspirations' : '/inspirations'}
            className="text-muted-foreground hover:underline mx-4"
          >
            {dict.inspiration.seeAllInspirations}
          </Link>
        </div> */}
        <p className='text-lg mb-6 text-muted-foreground text-justify'>
          {dict.inspiration.description}
        </p>

        <div className='flex flex-col gap-8'>
          {quotes.map((quote, index) => {
            const isReversed = index === 1
            return (
              <div
                key={index}
                className={`relative bg-white dark:bg-black/10 p-6 rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.20)] dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.10)] flex flex-col sm:flex-row ${
                  isReversed ? 'sm:flex-row-reverse' : ''
                } gap-6 items-center sm:items-start transition-transform`}
              >
                {/* Image as the card background */}
                <div className='absolute inset-0 w-full h-full'>
                  <Image
                    src={quote.image}
                    alt={quote.author}
                    fill
                    className={`rounded-2xl opacity-40 object-cover ${
                      isReversed ? '-scale-x-100' : ''
                    }`}
                  />
                </div>

                {/* Text content */}
                <div className='relative z-10 w-full text-center sm:text-left p-6'>
                  <a
                    href={quote.wikiLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-foreground hover:underline hover:decoration-0'
                  >
                    <p className='text-md font-semibold mb-2 text-muted-foreground drop-shadow-lg  underline underline-offset-2'>
                      {quote.author}
                    </p>
                  </a>
                  <blockquote className='text-xl italic text-foreground drop-shadow-lg'>
                    {quote.text}
                  </blockquote>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
