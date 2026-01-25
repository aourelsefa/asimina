'use client'

import Link from 'next/link'
import { categories } from '@/data/categories'

export default function Categories() {
  return (
    <section id="categories" className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm text-gray-600 uppercase tracking-widest font-medium mb-4 block">
            Services
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Photography Categories
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore different aspects of my work. Each category represents a different approach 
            to capturing moments, emotions, and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 rounded-lg shadow-sm hover:shadow-xl"
            >
              {/* Number indicator */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative p-8 lg:p-10 min-h-[320px] flex flex-col">
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <div className="w-16 h-px bg-gray-300 mb-4" />
                  </div>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-8 flex-1">
                    {category.shortDescription}
                  </p>
                  
                  {/* Link indicator */}
                  <div className="flex items-center text-gray-900 group-hover:text-gray-700 transition-colors">
                    <span className="text-sm uppercase tracking-wider font-normal mr-2">
                      View Gallery
                    </span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Each category represents a different way of seeing and documenting the world. 
            Click on any category to explore the work and learn more about my approach.
          </p>
        </div>
      </div>
    </section>
  )
}
