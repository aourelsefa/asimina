# Switching from Mock Data to WordPress

When you're ready to connect WordPress, follow these simple steps:

## Step 1: Update `app/page.tsx`

Replace the current content with:

```tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import { fetchPage, fetchAllMedia, fetchMedia } from '@/lib/wordpress'

export default async function Home() {
  // Fetch WordPress content
  const heroPage = await fetchPage('hero')
  const aboutPage = await fetchPage('about')
  const contactPage = await fetchPage('contact')
  const galleryImages = await fetchAllMedia()

  // Extract hero background image if set in WordPress
  const heroImageId = heroPage?.acf?.background_image || heroPage?.meta?.background_image
  const heroBackgroundImage = heroImageId ? await fetchMedia(Number(heroImageId)) : null

  // Extract about profile image if set in WordPress
  const aboutImageId = aboutPage?.acf?.profile_image || aboutPage?.meta?.profile_image
  const aboutProfileImage = aboutImageId ? await fetchMedia(Number(aboutImageId)) : null

  return (
    <main className="min-h-screen">
      <Hero 
        title={heroPage?.title?.rendered || 'Welcome to My Portfolio'}
        subtitle={heroPage?.content?.rendered || 'Capturing moments, creating memories'}
        backgroundImage={heroBackgroundImage}
      />
      <About 
        title={aboutPage?.title?.rendered || 'About Me'}
        description={aboutPage?.content?.rendered || 'I am a passionate photographer...'}
        profileImage={aboutProfileImage}
      />
      <Gallery images={galleryImages} />
      <Contact 
        title={contactPage?.title?.rendered || 'Get In Touch'}
        email={contactPage?.acf?.email || contactPage?.meta?.email || ''}
        phone={contactPage?.acf?.phone || contactPage?.meta?.phone || ''}
        address={contactPage?.acf?.address || contactPage?.meta?.address || ''}
      />
    </main>
  )
}
```

## Step 2: Set Environment Variable

Create `.env.local` file:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com
```

## Step 3: Set Up WordPress

Follow the instructions in `WORDPRESS_SETUP.md` to configure your WordPress site.

## Step 4: Test

Run the development server and verify that content is loading from WordPress:

```bash
npm run dev
```

That's it! The components remain the same - only the data source changes.


