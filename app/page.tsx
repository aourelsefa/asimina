import Hero from '@/components/Hero'
import About from '@/components/About'
import Categories from '@/components/Categories'
import ScrollingGallery from '@/components/ScrollingGallery'
import Contact from '@/components/Contact'
import BlogSection from '@/components/BlogSection'
import { mockHero, mockAbout, mockGallery, mockContact } from '@/data/mockData'

// TODO: Replace with WordPress API calls when ready
// import { fetchPage, fetchAllMedia, fetchMedia } from '@/lib/wordpress'

export default function Home() {
  // Using mock data for now - will be replaced with WordPress API calls later
  // Uncomment the code below and remove mock data when WordPress is ready
  
  // export default async function Home() {
  //   const heroPage = await fetchPage('hero')
  //   const aboutPage = await fetchPage('about')
  //   const contactPage = await fetchPage('contact')
  //   const galleryImages = await fetchAllMedia()
  //   const heroImageId = heroPage?.acf?.background_image || heroPage?.meta?.background_image
  //   const heroBackgroundImage = heroImageId ? await fetchMedia(Number(heroImageId)) : null
  //   const aboutImageId = aboutPage?.acf?.profile_image || aboutPage?.meta?.profile_image
  //   const aboutProfileImage = aboutImageId ? await fetchMedia(Number(aboutImageId)) : null

  return (
    <main className="min-h-screen">
      <Hero 
        title={mockHero.title}
        subtitle={mockHero.subtitle}
        backgroundImage={mockHero.backgroundImage}
      />
      <About 
        title={mockAbout.title}
        description={mockAbout.description}
        profileImage={mockAbout.profileImage}
      />
      <Categories />
      <section id="gallery" className="bg-[#1a1a1a] px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-sm text-white/70 uppercase tracking-widest font-medium mb-4 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              Gallery
            </h2>
            <div className="w-24 h-px bg-white/30 mx-auto" />
          </div>
          <ScrollingGallery images={mockGallery} variant="minimal" />
        </div>
      </section>
      <Contact
        title={mockContact.title}
        lead={mockContact.lead}
        email={mockContact.email}
        phone={mockContact.phone}
        address={mockContact.address}
      />
      <BlogSection />
    </main>
  )
}

