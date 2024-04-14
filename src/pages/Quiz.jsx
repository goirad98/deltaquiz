import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink, Loading, Status } from '../components/basics'
import APP_ROUTES from '../constants/routes'
import { useQuiz } from '../hooks'

const Quiz = () => {
    const { isLoading, isQuizFinished, getCurrentQuestion, getStatus, handleAnswer, getResult } = useQuiz()

    if (isQuizFinished()) {
        const result = getResult()

        return (
            <div className='container'>
                <div className='vh-100 d-flex flex-column gap-4 justify-content-center align-items-center'>
                    <div className='d-flex flex-column gap-3 align-items-center' style={{ width: '200px' }}>
                        <h3>Resultado</h3>

                        <div className='w-100 card bg-body-tertiary'>
                            <div className='card-body d-flex flex-column gap-3 justify-content-center align-items-center'>
                                <img className='member-avatar' src={result.picture}/>
                                <h3>{result.name}</h3>
                            </div>
                        </div>

                        <ButtonLink
                            to={APP_ROUTES.Home}
                            className='w-100 btn-primary'
                            text='Atrás'
                            icon={faArrowLeft}
                        />
                    </div>
                </div>
            </div>
        )
    }

    const currentQuestion = getCurrentQuestion()
    const currentStatus = getStatus()

    return (
        <div className='container'>
            <div className='vh-100 d-flex flex-column gap-4 justify-content-center align-items-center'>
                {
                    isLoading
                    ? <Loading/>
                    : <>
                        <h3>{currentQuestion.text}</h3>

                        <div className='d-flex flex-column gap-3'>
                            {
                            currentQuestion.answers.map((answer, index) =>
                                    <div
                                        className='button-card'
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                    >
                                        {answer}
                                    </div>
                                )
                            }
                        </div>

                        <Status status={currentStatus}/>
                    </>
                }
            </div>
        </div>
    )

}

export default Quiz