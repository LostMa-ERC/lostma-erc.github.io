import Navbar from "./Navbar/Navbar";
import { MainLinks } from "./Navbar/Links";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <nav className="bg-primary">
        <Navbar links={MainLinks} />
      </nav>
      <main className="px-8 md:px-20 py-4 md:py-8">
        {children}
      </main>
      </>
    )
}