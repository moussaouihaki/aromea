import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aromea - Solutions Professionnelles d\'Hygiène',
  description: 'Découvrez les solutions d\'hygiène professionnelles d\'Aromea. Distributeurs, papier, détergents et solutions d\'ambiances pour entreprises.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
