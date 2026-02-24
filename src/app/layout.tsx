import "./globals.css";
import type { Metadata } from "next";
import { aBeeZee, amiri } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://laboratorio-de-genetica-do-desenvolvimento.com"),
  title: {
    default: "Laboratório de Genética do Desenvolvimento",
    template: "%s | Laboratório de Genética do Desenvolvimento",
  },
  description: "O Laboratório de Genética do Desenvolvimento é um projeto de pesquisa dedicado ao estudo dos processos genéticos que governam o desenvolvimento dos organismos. Nossa missão é compreender os mecanismos moleculares e celulares que regulam o crescimento, a diferenciação e a morfogênese, contribuindo para avanços científicos e aplicações na biologia do desenvolvimento.",
};

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