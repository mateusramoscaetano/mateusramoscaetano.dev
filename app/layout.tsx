import type { Metadata } from 'next'
import './globals.css'
import { Fira_Code } from 'next/font/google'

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
  openGraph: {
    title: 'Mateus Ramos Caetano - Desenvolvedor Full-stack',
    description: 'Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateus Ramos Caetano - Desenvolvedor Full-stack',
    description: 'Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${firaCode.variable} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
