// Mock data for the photographer portfolio
// This will be replaced with WordPress API calls later

export const mockHero = {
  title: `Photographer in Oslo
for Weddings,
Baptisms, Portraits, Events & More`,
  subtitle: 'Capturing real moments with a timeless, cinematic style',
  backgroundImage: {
    id: 1,
    source_url: '/asimina-habipi-photographer-in-oslo.jpg',
    alt_text: 'Asimina Habipi — photographer in Oslo',
    media_details: {
      width: 1920,
      height: 1080,
    },
  },
}

export const mockAbout = {
  title: 'About Me',
  description: `
    <p>I'm a photographer based in Oslo, focused on capturing people, places, and atmosphere as they naturally exist.</p>
    <p>My work explores emotion, identity, and the subtle connection between individuals and their surroundings. I approach photography with patience, observing rather than interrupting, allowing moments to unfold on their own.</p>
    <p>I'm not interested in forced poses or artificial perfection. What draws me in are real expressions, quiet details, and the atmosphere that often goes unnoticed.</p>
    <p>Whether I'm photographing people, events, or spaces, my aim is simple: to create images that feel honest, personal, and alive. The strongest photographs happen when people feel at ease, when they are not performing, but simply being.</p>
  `,
  profileImage: {
    id: 2,
    source_url: '/gallery/about-me.JPG',
    alt_text: 'Asimina Habipi - Photographer',
    media_details: {
      width: 800,
      height: 800,
    },
  },
}

// Gallery images from public/gallery (synced with folder; excludes about-me.JPG — used only in About)
const galleryImages = [
  '_DSC0103.jpg',
  '_DSC0816.jpg',
  '10.jpg',
  'about.png',
  'd.jpg',
  'DIO_1389 (3).jpg',
  'DIO_1416.JPG',
  'DIO_2499.jpg',
  'DIO_2506.jpg',
  'DIO_2507.jpg',
  'DIO_2597.jpg',
  'DIO_2673.jpg',
  'DIO_2723.jpg',
  'DIO_2869.jpg',
  'DIO_7283.JPG',
  'Docume_10 (2).jpg',
  'DSC_0016.JPG',
  'DSC_0036.JPG',
  'DSC_0039.jpg',
  'DSC_0060.JPG',
  'DSC_0076.jpg',
  'DSC_0099.jpg',
  'DSC_0101.jpg',
  'DSC_0230-Recovered_1.JPG',
  'DSC_0357.jpg',
  'DSC_0549.jpg',
  'DSC_0688.jpg',
  'DSC07866_1.JPG',
  'evi.1a..jpg',
  'filarmoniki.jpg',
  'karo.jpg',
  'vaptisi_32.JPG',
  'ρIZIBW.jpg',
]

/** Display hints for compressed files (aspect varies; Next/Image + object-cover handles crop). */
export const mockGallery = galleryImages.map((filename, index) => ({
  id: index + 3,
  source_url: `/gallery/${filename}`,
  alt_text: `Gallery image ${index + 1}`,
  media_details: {
    width: 1600,
    height: 1200,
  },
}))

export const mockContact = {
  title: 'Get In Touch',
  lead: "Have a project in mind? I'd love to hear from you — share your dates, location, and what you want the pictures to feel like.",
  email: 'asiminahabipi@gmail.com',
  phone: '+47 925 25 988',
  address: '123 Photography Street, Creative City, CC 12345',
}

/** Digits only, for `wa.me` / Viber deep links — matches `mockContact.phone`. */
export const contactPhoneE164Digits = mockContact.phone.replace(/\D/g, '')

export const socialInstagramUrl = 'https://www.instagram.com/asimina_habipi/?hl=en'

