import { getServerSession } from "next-auth/next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Interview Preparation App</h1>
      {session ? (
        <div className="space-y-4">
          <p className="text-xl">Welcome, {session.user?.name || "User"}!</p>
          <Link href="/questions" className="block">
            <Button className="w-full">Start Practice</Button>
          </Link>
          <Link href="/scoreboard" className="block">
            <Button variant="outline" className="w-full">
              View Scoreboard
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xl">Sign in to start practicing!</p>
          <Link href="/auth/signin" className="block">
            <Button className="w-full">Sign In</Button>
          </Link>
        </div>
      )}
    </main>
  )
}

