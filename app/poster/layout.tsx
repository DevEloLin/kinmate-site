// Poster route layout —— provides root <html>/<body> so Next.js can
// render outside the [locale] tree. Chrome headless screenshots this.

import '../globals.css'

export default function PosterLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased" style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
