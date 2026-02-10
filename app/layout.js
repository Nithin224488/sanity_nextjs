import './globals.css'

export const metadata = {
  title: 'Sanity + Next.js CMS Starter',
  description: 'A production-ready Sanity + Next.js CMS starter with schemas, SEO, and dynamic routing — ready in minutes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-neutral-800 bg-neutral-50">{children}</body>
    </html>
  )
}
