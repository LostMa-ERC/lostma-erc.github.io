import "./globals.css";
import Footer from "./shared/Footer";
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}
 
export const metadata: Metadata = {
  title: 'LostMa',
  description: 'ERC Research Project, 2024-2029',
  keywords: ['AI', 'Middle Ages', 'Digital Humanities'],
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: './favicon.svg'
    },
    {
      rel: 'shortcut icon',
      url: './favicon.ico'
    }
  ]
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="
        prefers-color-scheme 
        bg-gradient-to-r 
        from-gray-100 via-[var(--background)] to-gray-100 
        dark:from-black dark:via-[var(--background)] dark:to-black
      ">
        {children}
        <footer className="pb-16 text-sm leading-6 dark:bg-primary-dark">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
