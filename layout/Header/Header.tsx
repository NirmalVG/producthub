import SearchArea from "@/components/SearchArea/SearchArea"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const Header = () => {
  return (
    <>
      <header className="w-full border-b bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-4 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.webp" alt="Logo" width={50} height={50} />
            <h2 className="text-xl font-bold">ProductHub</h2>
          </Link>
        </div>
      </header>

      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <Suspense
            fallback={
              <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
            }
          >
            <SearchArea />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Header
