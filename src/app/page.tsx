import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Interview Preparation App</h1>
      <div className="space-y-4">
        <Link
          href="/auth/signin"
          className="block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
        >
          Sign In
        </Link>
        <Link
          href="/questions"
          className="block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 text-center"
        >
          Start Practice
        </Link>
        <Link
          href="/scoreboard"
          className="block px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 text-center"
        >
          View Scoreboard
        </Link>
      </div>
    </main>
  )
}

