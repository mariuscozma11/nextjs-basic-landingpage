import type { Metadata } from "next";

import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MechaFusion",
  description: "Website oficial al clubului de robotica UPT MechaFusion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
          {children}
          <Footer />
      </body>
    </html>
  );
}
