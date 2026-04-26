import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingSocialButton from '@/components/FloatingSocialButton'
import CookieConsent from '@/components/CookieConsent'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Asimina Habipi Photography',
  description: 'Photography portfolio by Asimina Habipi - Based in Oslo, focusing on people, places, and atmosphere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <FloatingSocialButton />
        <CookieConsent />
      </body>
    </html>
  )
}

