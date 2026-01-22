const LoadingSkeleton = () => {
  return (
    <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 sm:px-6 lg:px-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div className="relative aspect-square w-full animate-pulse bg-muted" />

          <div className="flex flex-1 flex-col gap-2 p-6">
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
            <div className="flex items-center gap-1 mt-1">
              <div className="h-3 w-20 animate-pulse rounded bg-muted" />
            </div>
            <div className="h-5 w-20 animate-pulse rounded-full bg-muted mt-1" />
          </div>

          <div className="flex flex-col gap-2 border-t p-6 pt-4">
            <div className="h-8 w-1/3 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
