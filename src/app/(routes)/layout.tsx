import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--display-rubik',
})

export const metadata: Metadata = {
  title: 'Pokedex - NSR',
  description: 'Check out our specialiced pokedex!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
