// WordPress API Types
export interface WordPressImage {
  id: number
  source_url: string
  alt_text: string
  media_details?: {
    width: number
    height: number
    sizes?: {
      [key: string]: {
        source_url: string
        width: number
        height: number
      }
    }
  }
}

export interface WordPressText {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt?: {
    rendered: string
  }
}

export interface PortfolioContent {
  hero: {
    title: string
    subtitle: string
    backgroundImage: WordPressImage | null
  }
  about: {
    title: string
    description: string
    profileImage: WordPressImage | null
  }
  gallery: WordPressImage[]
  contact: {
    title: string
    email: string
    phone: string
    address: string
  }
}


