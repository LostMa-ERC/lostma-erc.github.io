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
    <title>LostMa project wibsite</title>
    <meta name="description" content="ERC Project"/>
    {/* Open Graph meta tags */}
    <meta property="og:url" content="https://lostma-erc.github.io/"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="LostMa"/>
    <meta property="og:description" content="ERC Research Project, 2024-2029"/>
    <meta property="og:image" content="https://i.postimg.cc/0ykFJ18s/lostma-logo.png"/>
    {/* Twitter meta tags */}
    <meta property="twitter:domain" content="lostma-erc.github.io"/>
    <meta property="twitter:url" content="https://lostma-erc.github.io/"/>
    <meta name="twitter:title" content="LostMa"/>
    <meta name="twitter:description" content="ERC Research Project, 2024-2020"/>
    <meta name="twitter:image" content="https://i.postimg.cc/0ykFJ18s/lostma-logo.png"/>
  </head>
  <body className="prefers-color-scheme ">
    {children}
    <Footer />
  </body>
</html>
  );
}
