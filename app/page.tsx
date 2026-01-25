import Hero from '@/components/Hero'
import About from '@/components/About'
import Categories from '@/components/Categories'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
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
      <Gallery images={mockGallery} />
      <Contact 
        title={mockContact.title}
        email={mockContact.email}
        phone={mockContact.phone}
        address={mockContact.address}
      />
    </main>
  )
}

