import './globals.css'

export const metadata = {
  title: 'SugarFit Club - Move Together. Control Sugar. Live Better.',
  description: 'Free community-driven diabetes lifestyle club. Track glucose, move, challenge, learn.',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
