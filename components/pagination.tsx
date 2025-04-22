import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" disabled>
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {[1, 2, 3, 4, 5].map((page) => (
        <Button key={page} variant={page === 1 ? "default" : "outline"} size="icon" className="h-8 w-8" asChild>
          <Link href={`?page=${page}`}>{page}</Link>
        </Button>
      ))}

      <Button variant="outline" size="icon" asChild>
        <Link href="?page=2">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      </Button>
    </div>
  )
}

