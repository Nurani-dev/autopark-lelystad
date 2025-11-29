import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autopark Lelystad | Exclusieve Occasions & Service",
  description: "Autopark Lelystad - Uw partner voor exclusieve auto's, onderhoud en service. Bekijk onze actuele voorraad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.className} antialiased relative`}>
        {/* Ambient Neon Glows */}
        <div className="neon-glow -top-[200px] -left-[200px] opacity-40" />
        <div className="neon-glow top-[40%] -right-[200px] opacity-30" />
        <div className="neon-glow bottom-[10%] -left-[100px] opacity-20" />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
