import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./componentes/sections/Header";
import Footer from "./componentes/sections/Footer";
import Stars from "./componentes/Stars";

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900']});

export const metadata: Metadata = {
  title: "Star Wars Chronology",
  description: "Star Wars project for Supabase Hackathon 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Star Wars, Chronology, Star, Wars, Star Wars Chronology, Hackathon 2024, Supabase"/>
        <meta name="author" content="Francisco Castilleja"/>
        <meta property="og:title" content="Francisco Castilleja"/>
        <meta property="og:description" content="Star Wars project for Supabase Hackathon 2024"/>
        <meta property="og:image" content="/Media/screenshot1.webp" />
        <meta property="og:url" content="https://starwars-chronology.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="en_EN"/>
        <link rel="canonical" href="https://starwars-chronology.vercel.app/"/>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <Header/>
        <Stars/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
