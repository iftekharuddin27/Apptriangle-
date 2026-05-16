import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import NeuralCanvas from "./components/NeuralCanvas"; // Import it here

export const metadata: Metadata = {
  title: "Apptriangle",
  description: "Technology on Demand — Apptriangle services and solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head />
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();`}
        </Script>
        
        <CustomCursor />
        <NeuralCanvas /> {/* Put it globally here */}
        
        {children}
      </body>
    </html>
  );
}