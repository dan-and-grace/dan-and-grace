import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Dan & Grace",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest"></link>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            "https://fonts.googleapis.com/css2?" +
            "family=DM+Serif+Display:ital@0;1&" +
            "family=EB+Garamond:ital,wght@0,400..800;1,400..800&" +
            "family=Fresca&" +
            "family=Gabarito:wght@400..900&" +
            "family=Pacifico&family=Permanent+Marker&" +
            "family=Playfair+Display:ital,wght@0,400..900;1,400..900&" +
            "family=Raleway:ital,wght@0,100..900;1,100..900&" +
            "family=Satisfy&family=Shadows+Into+Light&" +
            "family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&" +
            "display=swap"
          }
          rel="stylesheet"
        />
      </head>
      <body className="h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
