import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ravin Kumar Jangir - AI Engineer Portfolio',
  description: 'AI Engineer specializing in LLMs, RAG, AI Agents, and full-stack development. Building intelligent systems that solve real-world problems.',
  keywords: ['AI Engineer', 'Machine Learning', 'LLMs', 'RAG', 'AI Agents', 'Full-Stack Development', 'Python', 'React', 'Next.js'],
  authors: [{ name: 'Ravin Kumar Jangir', url: 'https://ravinkumarjangir.vercel.app' }],
  creator: 'Ravin Kumar Jangir',
  publisher: 'Ravin Kumar Jangir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ravinkumarjangir.vercel.app',
    title: 'Ravin Kumar Jangir - AI Engineer Portfolio',
    description: 'AI Engineer specializing in LLMs, RAG, AI Agents, and full-stack development',
    siteName: 'Ravin Kumar Jangir Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravin Kumar Jangir - AI Engineer Portfolio',
    description: 'AI Engineer specializing in LLMs, RAG, AI Agents, and full-stack development',
    creator: '@ravinkumarjangir',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
