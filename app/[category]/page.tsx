'use client'

import { useState } from 'react'
import { notFound, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/categories'
import { mockGallery } from '@/data/mockData'
import { WordPressImage } from '@/types/wordpress'

// For now, we'll distribute images evenly across categories
// Later you can assign specific images to each category
function getCategoryImages(categorySlug: string, allImages: typeof mockGallery) {
  const categoryIndex = categories.findIndex(cat => cat.slug === categorySlug)
  const imagesPerCategory = Math.ceil(allImages.length / categories.length)
  const startIndex = categoryIndex * imagesPerCategory
  const endIndex = startIndex + imagesPerCategory
  
  return allImages.slice(startIndex, endIndex)
}

export default function CategoryPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState<WordPressImage | null>(null)
  
  // Safety check for params
  const categorySlug = params?.category as string
  if (!categorySlug) {
    notFound()
  }
  
  const category = categories.find((cat) => cat.slug === categorySlug)

  if (!category) {
    notFound()
  }

  const categoryImages = getCategoryImages(categorySlug, mockGallery)

  const handleImageClick = (image: WordPressImage) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <main className="min-h-screen bg-black text-white">
        {/* Header */}
        <div className="relative py-32 px-4 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
            
            <div className="mb-8">
              <span className="text-sm text-white/70 uppercase tracking-widest font-medium mb-4 block">
                Category
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                {category.name}
              </h1>
              <div className="w-24 h-px bg-white/30 mb-8" />
            </div>
            
            <div className="max-w-3xl">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <section className="py-20 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: category.fullDescription }}
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-sm text-white/70 uppercase tracking-widest font-medium mb-4 block">
                Gallery
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {category.name} Photography
              </h2>
              <div className="w-24 h-px bg-white/30 mx-auto" />
            </div>

            {categoryImages.length > 0 ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {categoryImages.map((image, index) => {
                  const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-64', 'h-80', 'h-96', 'h-72', 'h-80', 'h-64']
                  const heightClass = heights[index % heights.length]
                  
                  return (
                    <div
                      key={image.id}
                      className={`relative overflow-hidden group cursor-pointer break-inside-avoid mb-4 ${heightClass}`}
                      onClick={() => handleImageClick(image)}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image.source_url}
                          alt={image.alt_text || `${category.name} image ${index + 1}`}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 brightness-100 group-hover:brightness-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Image number */}
                        <div className="absolute bottom-4 left-4 text-white text-sm font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">
                  No images available for this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in {category.name} Photography?
            </h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Let&apos;s discuss how I can help capture your special moments. 
              Every project is unique, and I work to understand what makes yours special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/#contact"
                className="px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors font-medium uppercase tracking-wider text-sm"
              >
                Get In Touch
              </Link>
              <Link
                href="/#categories"
                className="px-8 py-3 border border-white/30 text-white hover:border-white/50 hover:bg-white/5 transition-all font-medium uppercase tracking-wider text-sm"
              >
                View All Categories
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-[fadeIn_0.15s_ease-in]"
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-gray-300 transition-colors z-[101] font-light w-12 h-12 flex items-center justify-center bg-black/50 rounded-full"
            onClick={handleCloseModal}
            aria-label="Close"
          >
            ×
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.source_url}
              alt={selectedImage.alt_text || 'Selected image'}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {/* Navigation hint */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm pointer-events-none">
            Click outside to close
          </div>
        </div>
      )}
    </>
  )
}
