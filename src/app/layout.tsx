import "./globals.css";
import { aBeeZee, amiri } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${aBeeZee.variable} ${amiri.variable}`} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}