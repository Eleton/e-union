import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EUnion",
  description: "I love Europe <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 flex h-full flex-col">
          <header className="p-4">
            <Image
              className="h-10 w-auto"
              src="/e-union-logo.svg"
              alt="Vercel Logo"
              // className="dark:invert"
              width="0"
              height="0"
              priority
            />
          </header>
          <main className="grow">{children}</main>
          {/* <footer className="p-4 py-2 text-sm">
            Developed by Aiman Josefsson
          </footer> */}
        </div>
      </body>
    </html>
  );
}
