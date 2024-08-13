import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo",
  description: "Demo Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body id="modal" className={inter.className}>{children}</body>
      <Analytics/>
    </html>
  );
}
