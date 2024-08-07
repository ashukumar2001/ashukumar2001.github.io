import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/backgrounds/particle";
import Navbar from "@/components/navbar";
import CursorProvider from "@/components/cursor/CursorProvider";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesBackground />
          <div className="container mx-auto h-full relative">
            <CursorProvider>
              <Navbar />
              {children}
            </CursorProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
