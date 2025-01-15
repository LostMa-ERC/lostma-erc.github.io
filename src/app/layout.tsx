import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar/navbar";
import { MainLinks } from "./components/Navbar/Links";

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
  <body className="prefers-color-scheme">
    <Header />
    <nav className="bg-primary dark:bg-primary-dark">
      <Navbar links={MainLinks} />
    </nav>
    <main>
      {children}
    </main>
    <Footer />
  </body>
</html>
  );
}
