import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/src/context/ProductContext";
import Config from "@/src/Config";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sledující.cz | Čeští sledující a lajky do pár sekund",
  description:
    "Nakupujte sledující, lajky, komentáře a další služby pro Instagram, Facebook, YouTube a další sociální sítě. Vše je zcela automatické a dorazí do pár sekund.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Config>
          <ProductProvider>{children}</ProductProvider>
        </Config>
      </body>
    </html>
  );
}
