import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import type { Metadata } from 'next'

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
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
