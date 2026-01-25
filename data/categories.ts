// Photography categories with detailed content
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  fullDescription: string
  imageCount?: number
}

export const categories: Category[] = [
  {
    id: 'wedding',
    name: 'Wedding',
    slug: 'wedding',
    shortDescription: 'Capturing your special day with authenticity and emotion',
    description: 'Capturing your special day with authenticity and emotion',
    fullDescription: `
      <p>Wedding photography is about more than documenting an event—it's about preserving the genuine emotions, 
      the quiet moments, and the atmosphere that makes your day uniquely yours.</p>
      <p>I approach wedding photography with patience and observation, allowing moments to unfold naturally rather 
      than forcing poses. My goal is to capture the real connections between people, the subtle glances, the laughter, 
      and the tears of joy that tell your story.</p>
      <p>From the intimate preparations in the morning to the celebration that follows, I focus on creating images 
      that feel authentic and meaningful. Every wedding is different, and I work to understand what makes yours special, 
      ensuring the photographs reflect your personalities and the atmosphere of your day.</p>
      <p>Whether it's a small intimate ceremony or a grand celebration, I believe the best images come from moments 
      when people feel comfortable and can be themselves. Let me help you preserve these memories in a way that feels 
      true to who you are.</p>
    `,
  },
  {
    id: 'baptism',
    name: 'Baptism',
    slug: 'baptism',
    shortDescription: 'Documenting meaningful moments of faith and celebration',
    description: 'Documenting meaningful moments of faith and celebration',
    fullDescription: `
      <p>Baptism ceremonies are profound moments of faith, family, and tradition. These celebrations mark important 
      milestones in a family's spiritual journey, and they deserve to be documented with sensitivity and respect.</p>
      <p>I approach baptism photography with a quiet presence, understanding that these are sacred moments that require 
      reverence. My focus is on capturing the atmosphere of the ceremony, the expressions of family members, and the 
      meaningful details that make each baptism unique.</p>
      <p>From the formal ceremony to the family gatherings that follow, I document these moments in a way that honors 
      the significance of the occasion while preserving the genuine emotions and connections between family members.</p>
      <p>These photographs become treasured family heirlooms, capturing not just an event, but a moment of faith, 
      hope, and celebration that families will look back on for generations.</p>
    `,
  },
  {
    id: 'modelling',
    name: 'Modelling',
    slug: 'modelling',
    shortDescription: 'Portrait and fashion photography sessions',
    description: 'Portrait and fashion photography sessions',
    fullDescription: `
      <p>Modelling and portrait photography is a collaboration between photographer and subject. It's about creating 
      images that capture not just how someone looks, but who they are—their personality, their confidence, and their 
      unique presence.</p>
      <p>I work to create an environment where models and subjects feel comfortable and can express themselves authentically. 
      Rather than rigid posing, I prefer to guide and observe, allowing natural expressions and movements to emerge.</p>
      <p>Whether it's fashion photography, portfolio work, or personal portraits, I focus on creating images that feel 
      genuine and compelling. My approach combines technical skill with an understanding of light, composition, and the 
      subtle details that make a portrait stand out.</p>
      <p>Every session is tailored to the individual, ensuring that the final images reflect their personality and style. 
      I believe the best portraits are created when people feel seen, understood, and confident in front of the camera.</p>
    `,
  },
  {
    id: 'events',
    name: 'Events',
    slug: 'events',
    shortDescription: 'Corporate and social event photography',
    description: 'Corporate and social event photography',
    fullDescription: `
      <p>Event photography requires the ability to be present and observant, capturing the atmosphere and energy of 
      gatherings both large and small. From corporate functions to social celebrations, each event has its own 
      character and moments worth preserving.</p>
      <p>I approach event photography with a documentary style, focusing on capturing the natural flow of the event 
      rather than interrupting it. My goal is to document the atmosphere, the interactions between people, and the 
      details that make each event memorable.</p>
      <p>Whether it's a corporate conference, a product launch, a birthday celebration, or a cultural event, I work 
      to understand the purpose and atmosphere of the gathering, ensuring the photographs reflect what made it special.</p>
      <p>Good event photography is about being in the right place at the right time, observing the moments that matter, 
      and creating images that tell the story of the event in a way that feels authentic and engaging.</p>
    `,
  },
  {
    id: 'portraits',
    name: 'Portraits',
    slug: 'portraits',
    shortDescription: 'Personal and professional portrait sessions',
    description: 'Personal and professional portrait sessions',
    fullDescription: `
      <p>Portrait photography is about connection and authenticity. It's an opportunity to create images that capture 
      someone's essence—their personality, their character, and the way they present themselves to the world.</p>
      <p>I approach portrait sessions with patience and attention to detail. Rather than rushing through poses, I take 
      time to understand what the person wants to convey and create an environment where they feel comfortable being 
      themselves.</p>
      <p>Whether it's professional headshots, family portraits, or personal sessions, I focus on creating images that 
      feel genuine and meaningful. My approach combines natural light with careful composition, ensuring that the 
      technical aspects support rather than overshadow the person in the photograph.</p>
      <p>Every portrait session is unique, and I work to create images that reflect the individual's personality and 
      style. The best portraits are those where people feel comfortable, seen, and understood—images that they'll 
      treasure for years to come.</p>
    `,
  },
]
