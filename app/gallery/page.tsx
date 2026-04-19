import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { mockGallery } from '@/data/mockData'

export const metadata: Metadata = {
  title: 'Gallery | Asimina Habipi Photography',
  description: 'Selected work — weddings, baptisms, events, and portraits in Oslo and beyond.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#ecebe8]">
      {/* Editorial header */}
      <header className="relative overflow-hidden border-b border-black/10 bg-[#1a1a1a] px-4 pb-12 pt-28 text-white md:pb-16 md:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-6 bottom-0 translate-y-1/4 font-serif text-[clamp(8rem,28vw,18rem)] font-bold leading-none tracking-tighter text-white/[0.07]"
          aria-hidden
        >
          G
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-amber-200/80">Portfolio</p>
            <h1 className="mt-3 max-w-xl font-serif text-[clamp(2.5rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight">
              Moments in no particular order
            </h1>
          </div>
          <div className="flex max-w-md flex-col gap-4 md:items-end md:text-right">
            <p className="text-sm leading-relaxed text-white/55">
              A living wall of frames — built to grow. Tap through categories on the home page for stories; this is
              the raw rhythm of the work.
            </p>
            <Link
              href="/#contact"
              className="inline-flex w-fit items-center gap-2 border border-white/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 transition hover:border-amber-300/60 hover:text-amber-100"
            >
              Enquire
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Dense masonry wall — many narrow columns, small thumbnails */}
      <section className="mx-auto max-w-[1800px] px-2 py-8 sm:px-4 md:py-12" aria-label="Image gallery">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-black/10 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-500">
            {mockGallery.length} frames
          </p>
          <Link href="/" className="text-[11px] font-medium uppercase tracking-wider text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline">
            ← Home
          </Link>
        </div>

        <ul className="columns-3 gap-x-2 sm:columns-4 sm:gap-x-2.5 md:columns-5 lg:columns-6 lg:gap-x-3 xl:columns-7 2xl:columns-8">
          {mockGallery.map((image, index) => (
            <li key={image.id} className="mb-2 break-inside-avoid sm:mb-2.5">
              <figure className="group relative overflow-hidden rounded-md bg-gray-300/80 shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition duration-300 hover:z-[1] hover:-translate-y-0.5 hover:rotate-[0.4deg] hover:shadow-lg hover:ring-black/10">
                <div className="relative w-full">
                  <Image
                    src={image.source_url}
                    alt={image.alt_text || 'Gallery photograph'}
                    width={image.media_details?.width ?? 640}
                    height={image.media_details?.height ?? 800}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, (max-width: 1536px) 18vw, 14vw"
                    priority={index < 10}
                  />
                </div>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2 pt-8 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="block truncate text-center font-mono text-[9px] uppercase tracking-wider text-white/90">
                    {image.alt_text || 'Frame'}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
