import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-primary-foreground p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Sholu
              </Link>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link href="/profile">Profile</Link></li>
                  <li><Link href="/store">Store</Link></li>
                  <li><Link href="/orders">Orders</Link></li>
                  <li><Link href="/support">Support</Link></li>
                </ul>
              </nav>
              <Button variant="outline" asChild>
                <Link href="/login">Log out</Link>
              </Button>
            </div>
          </header>
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-secondary text-secondary-foreground p-4">
            <div className="container mx-auto text-center">
              © 2023 Sholu. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

