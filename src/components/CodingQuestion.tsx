"use client"

import type React from "react"
import { useState } from "react"

interface CodingQuestionProps {
  question: {
    id: string
    content: string
    language: string
  }
  onSubmit: (code: string) => void
}

const CodingQuestion: React.FC<CodingQuestionProps> = ({ question, onSubmit }) => {
  const [code, setCode] = useState("")

  const handleSubmit = () => {
    onSubmit(code)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{question.content}</h3>
      <p>Language: {question.language}</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-40 p-2 border rounded"
        placeholder="Write your code here..."
      />
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  )
}

export default CodingQuestion

