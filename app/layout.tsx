import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ReactQueryClient } from '../components/ReactQueryClient';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de contatos",
  description: "Lista de contatos funcional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClient>
      <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
        <Toaster />
      </html>
    </ReactQueryClient>
  );
}
