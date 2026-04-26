'use client'

import ContactRingsLayout from '@/components/ContactRingsLayout'

interface ContactProps {
  title: string
  lead?: string
  email: string
  phone: string
  address: string
}

const defaultLead =
  "Have a project in mind? I'd love to hear from you — share your dates, location, and what you want the pictures to feel like."

export default function Contact({ title, lead = defaultLead, email, phone, address }: ContactProps) {
  return <ContactRingsLayout title={title} lead={lead} email={email} phone={phone} address={address} />
}
