import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
//@ts-ignore
import "./globals.css"
import TenstackProviders from "@/providers/TenstackProviders"
import CommonLayout from "@/layout/CommonLayout"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Product Hub",
  description:
    "Explore a vast collection of high-quality products with real-time search, smart filtering, and seamless infinite browsing. Your one-stop hub for everything you need.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.dummyjson.com" />
        <link rel="dns-prefetch" href="https://cdn.dummyjson.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
        data-new-gr-c-s-check-loaded="14.1269.0"
        data-gr-ext-installed=""
      >
        <TenstackProviders>
          <CommonLayout>{children}</CommonLayout>
        </TenstackProviders>
      </body>
    </html>
  )
}
