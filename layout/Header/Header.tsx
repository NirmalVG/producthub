import SearchArea from "@/components/SearchArea/SearchArea"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const Header = () => {
  return (
    <header className="sticky top-0 pt-5 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link
        href="/"
        className="flex flex-row justify-center items-center gap-2"
      >
        <Image
          src="/images/logo.webp"
          alt="Product Hub Logo"
          width={50}
          height={50}
          priority
        />
        <h2 className="text-xl font-bold">ProductHub</h2>
      </Link>
      <Suspense
        fallback={<div className="h-10 w-full animate-pulse bg-muted" />}
      >
        <SearchArea />
      </Suspense>
    </header>
  )
}

export default Header
