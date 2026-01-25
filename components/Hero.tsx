'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { WordPressImage } from '@/types/wordpress'

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: WordPressImage | null
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

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
      
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6">
          <span className="inline-block text-white/90 text-sm md:text-base font-normal tracking-[0.3em] uppercase mb-4">
            Photography
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] text-shadow-soft">
          <span className="block">{title.split(' ').slice(0, -2).join(' ')}</span>
          <span className="block text-white/90">{title.split(' ').slice(-2).join(' ')}</span>
        </h1>
        
        <div className="w-24 h-px bg-white/50 mx-auto mb-8" />
        
        <p 
          className="text-lg md:text-2xl lg:text-3xl text-white/95 font-normal max-w-3xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
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
