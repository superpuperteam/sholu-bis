import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-4xl font-bold">Welcome to Sholu</h1>
      <p className="text-xl text-muted-foreground">Your social media management platform</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/store">View Plans</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/support">Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

