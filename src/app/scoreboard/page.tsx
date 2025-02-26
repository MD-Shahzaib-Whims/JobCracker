import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface User {
  id: number;
  name: string;
}

interface Score {
  id: number;
  score: number;
  user: User;
}


export default async function ScoreboardPage() {
  const scores: Score[] = await prisma.score.findMany({
    include: { user: true },
    orderBy: { score: "desc" },
    take: 10,
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Scoreboard</h1>
      <table className="w-full max-w-2xl">
        <thead>
          <tr className="dark:bg-slate-800 bg-gray-200">
            <th className="p-2 text-left">Rank</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{score.user.name}</td>
              <td className="p-2">{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

