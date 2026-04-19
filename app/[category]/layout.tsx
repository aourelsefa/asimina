import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { categories } from '@/data/categories'

type Props = {
  children: ReactNode
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = categories.find((c) => c.slug === params.category)
  if (!cat) {
    return { title: 'Not found' }
  }
  return {
    title: `${cat.pageTitle} | Asimina Habipi Photography`,
    description: cat.shortDescription,
  }
}

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return children
}
