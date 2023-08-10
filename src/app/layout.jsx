import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL('https://craniomom.com'),
  title: {
    template: '%s - CranioMom',
    default: 'CranioMom - Exceptional care for your new baby.',
  },
  openGraph: {
    title: 'CranioMom',
    description:
      'Angela Pater is a nationally certified massage therapist focused on craniosacral therapy for infant care.',
    url: 'https://craniomom.com',
    type: 'website',
  },
  //   siteName: 'CranioMom',
  //   images: [
  //     {
  //       url: 'https://craniomom.com/og',
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   locale: 'en_US',
  // },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
