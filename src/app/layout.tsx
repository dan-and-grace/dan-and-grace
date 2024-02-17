import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan & Grace",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="font-sans h-full">{children}</body>
    </html>
  );
}
