import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/data/categories'

/** Cover art per category — files in `public/services`. */
const serviceCoverById: Record<string, string> = {
  wedding: '/services/wedding-in-islo.jpg',
  baptism: '/services/baptism-in-oslo.jpg',
  modelling: '/services/modelling-in-oslo.jpg',
  events: '/services/events-in-oslo.jpg',
  portraits: '/services/portrait-in-oslo.jpg',
}

export default function Categories() {
  return (
    <section id="categories" className="bg-[#f5f5f5] py-20 text-gray-900 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">Services</span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-gray-900 md:text-5xl">Photography services</h2>
          <p className="mt-3 text-gray-600">
            Weddings, baptisms, portraits, and more — each session is approached with patience, observation, and a
            cinematic eye.
          </p>
        </div>
      </div>

      <div className="border-y border-gray-200/80 bg-[#f5f5f5] py-8">
        <div className="mx-auto flex max-w-[1600px] flex-wrap justify-center gap-4 px-4 pb-8 pt-2 sm:gap-5 md:px-8">
          {categories.map((cat) => {
            const src = serviceCoverById[cat.id] ?? serviceCoverById.wedding
            return (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="group relative w-[min(100%,280px)] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:border-gray-400 hover:shadow-lg sm:w-[260px] md:w-[272px]"
              >
                <article className="relative">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={src}
                      alt={`${cat.name} photography`}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                      sizes="(max-width: 640px) 100vw, 272px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-2xl font-bold text-white drop-shadow-sm">{cat.name}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-white/70">{cat.shortDescription}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 transition group-hover:text-amber-200/95">
                      View gallery
                      <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
