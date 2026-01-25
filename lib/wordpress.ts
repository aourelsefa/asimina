// WordPress REST API utilities
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || ''

if (!WORDPRESS_API_URL) {
  console.warn('NEXT_PUBLIC_WORDPRESS_API_URL is not set. Please add it to your .env.local file')
}

export interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  headers?: Record<string, string>
}

/**
 * Fetch data from WordPress REST API
 */
export async function fetchWordPress(
  endpoint: string,
  options: FetchOptions = {}
): Promise<any> {
  const url = `${WORDPRESS_API_URL}/wp-json/wp/v2${endpoint}`
  
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Fetch media (images) from WordPress
 */
export async function fetchMedia(mediaId?: number): Promise<any> {
  if (!mediaId) return null
  
  try {
    const media = await fetchWordPress(`/media/${mediaId}`)
    return media
  } catch (error) {
    console.error('Error fetching media:', error)
    return null
  }
}

/**
 * Fetch multiple media items
 */
export async function fetchMediaItems(mediaIds: number[]): Promise<any[]> {
  if (!mediaIds || mediaIds.length === 0) return []
  
  try {
    const promises = mediaIds.map(id => fetchMedia(id))
    const results = await Promise.all(promises)
    return results.filter(item => item !== null)
  } catch (error) {
    console.error('Error fetching media items:', error)
    return []
  }
}

/**
 * Fetch pages from WordPress
 */
export async function fetchPage(slug: string): Promise<any> {
  try {
    const pages = await fetchWordPress(`/pages?slug=${slug}`)
    return pages[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

/**
 * Fetch all media items (for gallery)
 */
export async function fetchAllMedia(): Promise<any[]> {
  try {
    const media = await fetchWordPress('/media?per_page=100')
    return media || []
  } catch (error) {
    console.error('Error fetching all media:', error)
    return []
  }
}

