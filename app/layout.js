import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['300', '400', '700'], // Choose the weights you need
  subsets: ['latin'],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['300', '400', '600'],   
  subsets: ['latin'],              
});

export const metadata = {
  title: "Astral Paints",
  description: "Astral Paints is about colours and Paints",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/logos/icons8-pyramid-64.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} poppins.className`}  cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
