import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import Layout from "@/app/components/Layout/Layout";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "700"] 
});

export const metadata: Metadata = {
  title: "Portal de Viagens Brasil",
  description: "Encontre as melhores viagens no Brasil e explore os melhores destinos turísticos!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

