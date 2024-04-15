import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./componentes/sections/Header";
import Footer from "./componentes/sections/Footer";

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']});

export const metadata: Metadata = {
  title: "Star Wars Cronología",
  description: "Proyecto de Star Wars para la Hackathon 2024 de Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Star Wars, Cronología, Star, Wars, Star Wars Cronología, Hackathon 2024, Supabase"/>
        <meta name="author" content="Francisco Castilleja"/>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
