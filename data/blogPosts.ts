/**
 * Mock blog data — replace with CMS/API when ready.
 * Each post is written for people searching Oslo + photography topics (SEO + readability).
 */

export type BlogPost = {
  slug: string
  title: string
  /** Meta description: aim ~150–160 characters */
  metaDescription: string
  publishedAt: string
  updatedAt: string
  readTimeMinutes: number
  coverImage: { src: string; alt: string }
  keywords: string[]
  excerpt: string
  bodyHtml: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'natural-light-wedding-photography-oslo',
    title: 'Natural Light Wedding Photography in Oslo: What to Plan For',
    metaDescription:
      'Practical tips for natural light wedding photography in Oslo: seasons, venues, timelines, and how to work with your photographer for timeless images.',
    publishedAt: '2025-10-12',
    updatedAt: '2025-10-12',
    readTimeMinutes: 6,
    coverImage: {
      src: '/services/wedding-in-islo.jpg',
      alt: 'Natural light wedding photography in Oslo, Norway',
    },
    keywords: [
      'Oslo wedding photography',
      'natural light wedding',
      'Norway wedding photographer',
      'outdoor wedding Oslo',
    ],
    excerpt:
      'How daylight, season, and venue choice shape your wedding photos in Oslo — and what to discuss with your photographer before the day.',
    bodyHtml: `
      <p>Most couples in Oslo want wedding photos that feel <strong>honest and unforced</strong>. Natural light is often the simplest way to get that look — but it only works if your timeline and locations line up with how the sun really behaves in Norway.</p>
      <h2>Light in Oslo changes with the season</h2>
      <p>Winter weddings mean shorter days and soft, low light for much of the afternoon. Summer gives long evenings — ideal for portraits after dinner without losing that golden, warm quality. If you are booking a photographer, share your <strong>ceremony time and venue address</strong> early so they can plan where you will stand for vows, group photos, and couple portraits.</p>
      <h2>Venues: windows, gardens, and open shade</h2>
      <p>Historic buildings, hotels, and coastal venues around Oslo all behave differently. Large windows can give beautiful directional light on cloudy days. Outdoor spots often look best in <strong>open shade</strong> (not deep forest shade, which can turn skin tones cold). Your photographer can scout or suggest timing so you are not fighting harsh midday contrast.</p>
      <h2>What to ask on a call</h2>
      <p>Ask how they handle low light indoors, whether they use flash in a tasteful way when needed, and how they <strong>protect the mood of the day</strong> while still getting sharp, usable files. The goal is a mix of atmosphere and reliability — not one at the expense of the other.</p>
    `,
  },
  {
    slug: 'baptism-family-photographer-norway',
    title: 'Baptism & Family Events: Finding the Right Photographer in Norway',
    metaDescription:
      'What to look for in a baptism or family event photographer in Norway: discretion, experience with churches, and photos that feel calm and personal.',
    publishedAt: '2025-11-03',
    updatedAt: '2025-11-03',
    readTimeMinutes: 5,
    coverImage: {
      src: '/services/baptism-in-oslo.jpg',
      alt: 'Baptism and family celebration photography in Norway',
    },
    keywords: [
      'baptism photography Norway',
      'family event photographer Oslo',
      'church photography Norway',
      'barnedåp fotograf',
    ],
    excerpt:
      'Baptisms and small family gatherings need a photographer who moves quietly, respects the space, and still catches real connection between people.',
    bodyHtml: `
      <p>Christenings, confirmations, and intimate family celebrations are <strong>short and emotional</strong>. The best images rarely come from loud direction — they come from someone who reads the room and stays out of the way until the right moment.</p>
      <h2>Churches, chapels, and private venues</h2>
      <p>Rules vary: some places allow movement only in certain areas, or restrict flash. A photographer who has worked in <strong>similar spaces in Norway</strong> will set expectations before the day. If the ceremony is in a language or tradition that is new to the photographer, a quick briefing from you helps them anticipate key moments.</p>
      <h2>Group photos without losing the day</h2>
      <p>It helps to name one family member who can help gather people for a short list of must-have groups. The rest of the time can stay loose — <strong>candid connection</strong> between parents, godparents, and children usually ages better than long posed sessions in a hallway.</p>
      <h2>What you receive afterward</h2>
      <p>Ask about delivery time, how files are shared, and whether you can print albums through the photographer. Clear, written answers save stress after an already busy weekend.</p>
    `,
  },
  {
    slug: 'authentic-portrait-photography-oslo',
    title: 'Authentic Portraits in Oslo: Relaxed Posing That Still Looks Intentional',
    metaDescription:
      'How Oslo portrait photographers help you look natural on camera: movement, real environments, and why “not posing” is still a skill — written for people who dislike stiff photos.',
    publishedAt: '2025-12-01',
    updatedAt: '2025-12-18',
    readTimeMinutes: 7,
    coverImage: {
      src: '/services/portrait-in-oslo.jpg',
      alt: 'Outdoor portrait session with natural, relaxed posing in Oslo',
    },
    keywords: [
      'portrait photography Oslo',
      'authentic portraits Norway',
      'lifestyle photography Oslo',
      'professional headshots Oslo',
    ],
    excerpt:
      'Why the best portrait sessions feel more like a walk and a conversation than a studio performance — and how to prepare without overthinking it.',
    bodyHtml: `
      <p>Many people say they are “awkward in front of the camera.” In practice, the issue is not you — it is <strong>empty space and no context</strong>. A good portrait session in Oslo should give you something to do, somewhere to be, and just enough structure that the images look considered instead of random.</p>
      <h2>Environment over backdrop</h2>
      <p>Neighborhoods, studios with character, and outdoor locations you actually like will show in your body language. A park you walk in, a café you use, or a quiet street near your home can beat a generic background because <strong>your attention goes outward</strong> instead of into worrying about the lens.</p>
      <h2>Direction without stiffness</h2>
      <p>“Not posing” often really means: small prompts, repeated a few times — walk, stand still, look out, look back, adjust your coat, laugh at something true. A photographer is there to <strong>compress time</strong> so the useful moments happen in twenty minutes, not two hours of discomfort.</p>
      <h2>Before the session</h2>
      <p>Sleep and hydration matter more than a new outfit. If you are deciding between two outfits, pick the one you can move in and that fits the season — Oslo weather is part of the story, not a mistake in the background.</p>
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}
