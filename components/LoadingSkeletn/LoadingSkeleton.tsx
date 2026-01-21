const LoadingSkeleton = () => {
  return (
    <div className="mx-auto mt-5 grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 sm:px-6 lg:px-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-lg border bg-background"
        >
          <div className="aspect-square w-full animate-pulse bg-muted" />
          <div className="flex flex-1 flex-col gap-3 p-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
            <div className="h-3 w-1/3 animate-pulse rounded bg-muted" />
            <div className="mt-auto h-6 w-1/2 animate-pulse rounded bg-muted" />
          </div>
          <div className="p-4 pt-0">
            <div className="h-9 w-full animate-pulse rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
