import { Metadata } from "next";
import { Roboto } from "next/font/google";

import "../styles/global.css";

export const metadata: Metadata = {
  title: "LMJ Automotive | O melhor socorro, na pior hora!",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`scroll-smooth ${roboto.variable}`}>{children}</body>
    </html>
  );
}
