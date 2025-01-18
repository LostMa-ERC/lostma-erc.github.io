import "../globals.css";
import MainHTML from "../shared/Main";
import Header from "../shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MainHTML>
        {children}
      </MainHTML>
    </>
  );
}
