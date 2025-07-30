import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Capital Middle East L.L.C | Industrial Corporate Solutions",
  description: "Leading provider of industrial solutions including metal works, car parking structures, fencing systems, scaffolding, and more in the UAE.",
  keywords: "Metal Works, Car Parking, Fence system, Scafolding, Aluminuim Casting, Stainless Steel division, Coating Division, B2B, Industrial, Corporate, UAE"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground/80 antialiased">
        <Header />
        <main className="min-h-screen pt-20">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
