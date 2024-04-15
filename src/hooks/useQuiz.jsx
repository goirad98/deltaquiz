import { useState } from 'react'
import { QUESTIONS, MEMBERS } from '../constants/data'

const useQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [userAnswers, setUserAnswers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleNextQuestion = () => {
        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setIsFinished(true)
        }
    }

    const handleAnswer = (answerId) => {
        setIsLoading(true)
        setTimeout(() => {
            const answers = userAnswers
            answers.push(answerId)
            setUserAnswers(answers)
            handleNextQuestion()
            setIsLoading(false)
        }, 250)
    }

    const getCurrentQuestion = () => {
        return QUESTIONS[currentQuestion]
    }

    const getStatus = () => {
        return currentQuestion / QUESTIONS.length
    }

    const isQuizFinished = () => {
        return isFinished
    }

    const getResult = () => {
        const results = MEMBERS.map(member => {
            const memberAnswers = member.answers
            const points = memberAnswers.reduce((acc, current, index) => {
                return acc += Math.abs(Number(userAnswers[index]) - current)
            }, 0)
            return {
                ...member,
                points
            }
        })

        const sortedResults = results.sort((memberOne, memberTwo) => memberOne.points > memberTwo.points || (memberOne.name >= memberTwo.name && memberOne.points >= memberTwo.points) ? 1 : -1)
        return sortedResults
    }

    return {
        isLoading,
        getCurrentQuestion,
        handleAnswer,
        isQuizFinished,
        getStatus,
        getResult
    }
}

export default useQuiz