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
    <title>LostMa</title>
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <link rel="shortcut icon" href="./favicon.ico" />
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
