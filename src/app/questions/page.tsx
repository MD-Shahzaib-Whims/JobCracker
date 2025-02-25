"use client"

import { useState, useEffect } from "react"
import MCQQuestion from "../../components/MCQQuestion"
import CodingQuestion from "../../components/CodingQuestion"

export interface Question {
  id: string
  content: string
  type: "mcq" | "coding"
  options: string[]
  correctAnswer: string  // Only for MCQ questions
  language: string  // Only for coding questions (e.g. "javascript") 
  code?: string  // Only for coding questions
}

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    // Fetch questions from API
    // This is a placeholder, you'll need to implement the actual API call
    const fetchQuestions = async () => {
      const response = await fetch("/api/questions")
      const data = await response.json()
      setQuestions(data)
    }
    fetchQuestions()
  }, [])

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleCodingSubmit = (code: string) => {
    // Here you would typically send the code to a backend for evaluation
    console.log("Submitted code:", code)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (questions.length === 0) {
    return <div>Loading...</div>
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl">
          Your score: {score} / {questions.length}
        </p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {currentQuestion.type === "mcq" ? (
        <MCQQuestion question={currentQuestion} onAnswer={handleAnswer} />
      ) : (
        <CodingQuestion question={currentQuestion} onSubmit={handleCodingSubmit} />
      )}
    </div>
  )
}

