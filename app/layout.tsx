import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import CursorProvider from "@/components/cursor/CursorProvider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import AnimatedLayersProvider from "@/context/animated-layers-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashu - Front-End Developer",
  description: "Fron-End, NextJS, React Developer",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedLayersProvider>
            <div className="container mx-auto h-full relative">
              <CursorProvider>
                <Navbar />
                {children}
              </CursorProvider>
            </div>
          </AnimatedLayersProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
