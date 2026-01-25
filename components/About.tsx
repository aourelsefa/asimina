'use client'

import Image from 'next/image'
import { WordPressImage } from '@/types/wordpress'

interface AboutProps {
  title: string
  description: string
  profileImage: WordPressImage | null
}

export default function About({ title, description, profileImage }: AboutProps) {
  return (
    <section id="about" className="relative py-32 px-4 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          {profileImage && (
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 -z-10 transform rotate-3 scale-105" />
                <Image
                  src={profileImage.source_url}
                  alt={profileImage.alt_text || 'Profile'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-gray-200 -z-10" />
            </div>
          )}
          
          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-sm text-gray-600 uppercase tracking-widest font-medium mb-4 block">
                About
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                {title}
              </h2>
            </div>
            
            <div 
              className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            
            <div className="pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-gray-300" />
                <span className="text-sm text-gray-500 uppercase tracking-wider">Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
