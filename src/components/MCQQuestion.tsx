import type React from "react"
import { useState } from "react"

interface MCQQuestionProps {
  question: {
    id: string
    content: string
    options: string[]
    correctAnswer: string
    type: "mcq" | "coding"
    language?: string  // Only for coding questions (e.g. "javascript") 
    code?: string  // Only for coding questions
  }
  onAnswer: (isCorrect: boolean) => void
}

const MCQQuestion: React.FC<MCQQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption === question.correctAnswer)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{question.content}</h3>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="mcq-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="form-radio"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={!selectedOption}
      >
        Submit
      </button>
    </div>
  )
}

export default MCQQuestion

