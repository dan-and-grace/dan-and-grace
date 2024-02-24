import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan & Grace",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full ${fonts.rubik.variable}`}>
      <body className="h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
