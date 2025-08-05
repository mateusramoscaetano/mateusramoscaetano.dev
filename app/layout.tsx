import type { Metadata } from 'next'
import './globals.css'
import { Fira_Code } from 'next/font/google'
import { LanguageProvider } from '../lib/contexts/LanguageContext'

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Mateus Ramos Caetano - Desenvolvedor Full-stack',
  description: 'Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.',
  keywords: ['desenvolvedor', 'full-stack', 'react', 'next.js', 'typescript', 'node.js'],
  authors: [{ name: 'Mateus Ramos Caetano' }],
  creator: 'Mateus Ramos Caetano',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Mateus Ramos Caetano - Desenvolvedor Full-stack',
    description: 'Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mateusramoscaetano.dev',
    siteName: 'Mateus Ramos Caetano Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateus Ramos Caetano - Desenvolvedor Full-stack',
    description: 'Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.',
    creator: '@mateusramoscaetano',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#8B5CF6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={`${firaCode.variable} bg-gray-950 text-white antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
