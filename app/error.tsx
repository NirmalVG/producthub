"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto mt-24 flex max-w-md flex-col items-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        !
      </div>

      <h2 className="text-lg font-semibold">Something went wrong</h2>

      <p className="text-sm text-muted-foreground">
        We couldn’t load the products. Please try again.
      </p>

      <button
        onClick={reset}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Retry
      </button>
    </div>
  )
}
