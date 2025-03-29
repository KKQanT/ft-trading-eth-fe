import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Web3Provider } from '@/provider/Web3Provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S3T NFT Marketplace",
  description: "Mint and trade NFTs on the Ethereum network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Web3Provider>
          <NavBar />
          <main>{children}</main>
        </Web3Provider>
      </body>
    </html>
  );
}
