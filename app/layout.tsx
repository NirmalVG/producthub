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
  description: "Product Hub Application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
