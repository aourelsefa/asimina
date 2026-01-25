'use client'

interface ContactProps {
  title: string
  email: string
  phone: string
  address: string
}

export default function Contact({ title, email, phone, address }: ContactProps) {
  return (
    <section id="contact" className="relative py-32 px-4 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm text-gray-600 uppercase tracking-widest font-medium mb-4 block">
            Connect
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <div className="w-24 h-px bg-gray-300 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {email && (
            <div className="group text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                >
                  {email}
                </a>
              </div>
            </div>
          )}

          {phone && (
            <div className="group text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a
                  href={`tel:${phone}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                >
                  {phone}
                </a>
              </div>
            </div>
          )}

          {address && (
            <div className="group text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{address}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
