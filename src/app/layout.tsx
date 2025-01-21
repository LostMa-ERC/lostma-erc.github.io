import "./globals.css";
import Footer from "./shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <link rel="shortcut icon" href="./favicon.ico" />
    <title>LostMa</title>
    <meta name="description" content="ERC Project"/>
    {/* Open Graph meta tags */}
    <meta property="og:url" content="https://lostma-erc.github.io/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="LostMa"/>
    <meta property="og:description" content="ERC Research Project, 2024-2029"/>
    {/* Twitter meta tags */}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:domain" content="lostma-erc.github.io"/>
    <meta property="twitter:url" content="https://lostma-erc.github.io/"/>
    <meta name="twitter:title" content="LostMa"/>
    <meta name="twitter:description" content="ERC Research Project, 2024-2029"/>
  </head>
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
