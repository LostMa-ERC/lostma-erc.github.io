import Navbar from "../shared/Navbar/navbar";
import { MainLinks } from "../shared/Navbar/Links";

export default function MainHTML({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <nav className="bg-primary dark:bg-primary-dark">
        <Navbar links={MainLinks} />
      </nav>
      <main className="px-8 md:px-20 py-4 md:py-8">
        {children}
      </main>
      </>
    )
}