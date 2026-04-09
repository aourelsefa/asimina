// Mock data for the photographer portfolio
// This will be replaced with WordPress API calls later

export const mockHero = {
  title: 'Capturing Life\'s Beautiful Moments',
  subtitle: 'Professional Photography Services',
  backgroundImage: {
    id: 1,
    source_url: '/hero.jpg',
    alt_text: 'Photography background',
    media_details: {
      width: 1920,
      height: 1080,
    },
  },
}

export const mockAbout = {
  title: 'About Me',
  description: `
    <p>I am a photographer based in Oslo, with a strong focus on people, places, and atmosphere.</p>
    <p>I use photography as a visual language to explore emotion, identity, and space. My work is shaped by observation, silence, and the relationship between people and their environment.</p>
    <p>Rather than directing moments, I wait for them — allowing the image to form naturally. I am drawn to genuine expressions, quiet details, and the subtle atmosphere that surrounds a moment, rather than staged perfection.</p>
    <p>Whether I photograph people, events, or places, my goal is always the same: to tell a story that feels real, personal, and meaningful. I believe the strongest images are created when people feel comfortable, seen, and understood.</p>
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

// Gallery images from public/gallery folder
const galleryImages = [
  '_DSC0103.jpg',
  '_DSC0816.jpg',
  '10.jpg',
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

export const mockGallery = galleryImages.map((filename, index) => ({
  id: index + 3,
  source_url: `/gallery/${filename}`,
  alt_text: `Gallery image ${index + 1}`,
  media_details: {
    width: 1200,
    height: 1200,
  },
}))

export const mockContact = {
  title: 'Get In Touch',
  email: 'hello@photographer.com',
  phone: '+1 (555) 123-4567',
  address: '123 Photography Street, Creative City, CC 12345',
}

