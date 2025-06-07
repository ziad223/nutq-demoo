import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/globals.css";
import { headers } from "next/headers";
import { routing } from "../routing";
import myCustomFont from "@/public/fonts/customFont";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nutq-demo",
  description: "Your premier destination for real estate",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current locale from headers
  const headersList = await headers();
  const currentLocale =
    headersList.get("x-next-intl-locale") || routing.defaultLocale;

  return (
    <html
   
      lang={currentLocale}
      dir={currentLocale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-d...=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={` min-h-screen ${currentLocale === "ar" ? myCustomFont.className : inter.className}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
