import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "EUnion",
    description: "I love Europe <3",
    metadataBase: new URL(`https://${headers().get("host")}`),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 mx-auto flex h-full max-w-[600px] select-none flex-col">
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
        </div>
      </body>
    </html>
  );
}
