// Root layout for www.demmmarketing.com
//
// Wires up:
//  - Editorial typography (Playfair Display serif + Inter sans) from Google Fonts
//    so the new logo wordmark renders identically on every device with no flicker.
//  - Favicon set, apple-touch-icon, and PWA icons (all sourced from public/).
//  - OpenGraph + Twitter Card metadata so links shared on social/SMS show a
//    proper DEMM Marketing preview card with the editorial gold-on-black image.
//  - Theme color and viewport so mobile browsers chrome the address bar correctly.
//  - LeadConnector chat widget (loads after-interactive — no render blocking).

import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.demmmarketing.com'),
  title: {
    default: 'DEMM OS — Never Miss A Lead™',
    template: '%s | DEMM Marketing',
  },
  description:
    'AI marketing operating system for small business. Stop losing leads, automate follow-up, post content daily, and book more jobs — starting at $99/month with a 7-day free trial.',
  keywords: [
    'AI marketing',
    'small business marketing',
    'lead capture',
    'missed call text back',
    'CRM automation',
    'DEMM OS',
    'DEMM Marketing',
  ],
  authors: [{ name: 'DEMM LLC' }],
  creator: 'DEMM LLC',
  publisher: 'DEMM LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.demmmarketing.com',
    siteName: 'DEMM Marketing',
    title: 'DEMM OS — Never Miss A Lead™',
    description:
      'Small businesses are leaving $5,000–$20,000 on the table every month. We show you how to capture it. Starting at $99/month.',
    images: [
      {
        url: '/demm-og-share.jpg',
        width: 1200,
        height: 630,
        alt: 'DEMM Marketing — AI Marketing OS for Small Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEMM OS — Never Miss A Lead™',
    description:
      'AI marketing OS for small business. From $99/month. 7-day free trial.',
    images: ['/demm-og-share.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-black text-white antialiased font-sans">
        {children}
        {/* LeadConnector GHL Chat Widget
            strategy="beforeInteractive" ensures the script tag is present in
            the server-rendered HTML so GHL's A2P compliance crawler can detect it.
            The mount div anchors the bubble per the official GHL embed code. */}
        <div
          data-chat-widget=""
          data-widget-id="6a0657d3f7ab416653f2de42"
          data-location-id="C9kHiYdwiE9F20AP4Ufm"
        />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a0657d3f7ab416653f2de42"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
