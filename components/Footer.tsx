'use client'

import Image from 'next/image'
import Link from 'next/link'
import { mockContact } from '@/data/mockData'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0f0f0f] text-white py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col">
            <div className="mb-8 max-w-[min(100%,420px)] md:mb-10">
              <Link
                href="/"
                className="inline-block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 rounded-sm"
              >
                <Image
                  src="/LogoNegative.png"
                  alt="Asimina Habipi Photography"
                  width={420}
                  height={137}
                  className="h-auto w-full"
                />
              </Link>
              <p className="mt-3 max-w-sm text-xs leading-relaxed tracking-wide text-white/50">
                Photographer based in Oslo — weddings, baptisms, events, and portraits.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <p className="text-white text-sm uppercase tracking-widest font-medium mb-6">
              Quick Links
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#categories" className="text-white/70 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <p className="text-white text-sm uppercase tracking-widest font-medium mb-6">
              Categories
            </p>
            <ul className="space-y-3">
              <li>
                <a href="/wedding" className="text-white/70 hover:text-white transition-colors">
                  Wedding
                </a>
              </li>
              <li>
                <a href="/baptism" className="text-white/70 hover:text-white transition-colors">
                  Baptism
                </a>
              </li>
              <li>
                <a href="/modelling" className="text-white/70 hover:text-white transition-colors">
                  Modelling
                </a>
              </li>
              <li>
                <a href="/events" className="text-white/70 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/portraits" className="text-white/70 hover:text-white transition-colors">
                  Portraits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-white text-sm uppercase tracking-widest font-medium mb-6">
              Contact
            </p>
            <div className="space-y-4 text-white/70">
              <p className="leading-relaxed">
                Oslo, Norway
              </p>
              <p className="leading-relaxed">
                <a href={`mailto:${mockContact.email}`} className="hover:text-white transition-colors">
                  {mockContact.email}
                </a>
              </p>
              <p className="leading-relaxed">
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  Send a message
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm font-normal">
              © {currentYear} Asimina Habipi Photography
            </p>
            <p className="text-gray-400 text-xs mt-1 font-normal">
              All rights reserved
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs font-normal">
              Developed with <span className="text-red-500">♥</span> by{' '}
              <a
                href="https://sefaweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                SEFAWEB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
