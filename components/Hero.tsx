'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WordPressImage } from '@/types/wordpress'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: WordPressImage | null
}

/** Prefer a break after “…Oslo” when the title follows “X for Y” pattern; otherwise split near the middle. */
function heroTitleLines(title: string): [string, string] {
  const forMarker = ' for '
  const idx = title.indexOf(forMarker)
  if (idx !== -1) {
    return [title.slice(0, idx), title.slice(idx + 1)]
  }
  const words = title.trim().split(/\s+/)
  if (words.length <= 1) return [title, '']
  const mid = Math.ceil(words.length / 2)
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')]
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [titleLine1, titleLine2] = heroTitleLines(title)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.source_url}
            alt={backgroundImage.alt_text || 'Background'}
            fill
            className="object-cover scale-105"
            priority
            quality={95}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      )}
      
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.05] text-balance text-shadow-soft">
          <span className="block">{titleLine1}</span>
          {titleLine2 ? (
            <span className="block text-white/90 mt-1 md:mt-2">{titleLine2}</span>
          ) : null}
        </h1>

        <div className="w-24 h-px bg-white/50 mx-auto mb-8" />

        <p
          className="text-lg md:text-xl lg:text-2xl text-white/95 font-normal max-w-2xl mx-auto leading-relaxed text-balance mb-10"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center min-w-[200px] px-8 py-3.5 bg-white text-gray-900 text-sm font-semibold tracking-wide uppercase transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View Portfolio
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center min-w-[200px] px-8 py-3.5 border border-white/80 text-white text-sm font-semibold tracking-wide uppercase transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Check Availability
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-xs uppercase tracking-wider font-normal">Scroll</span>
          <div className="animate-bounce">
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
