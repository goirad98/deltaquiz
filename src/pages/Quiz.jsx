import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink, Loading, Status } from '../components/basics'
import { useQuiz } from '../hooks'
import APP_ROUTES from '../constants/routes'

const Quiz = () => {
    const { isLoading, isQuizFinished, getCurrentQuestion, getStatus, handleAnswer, getResult } = useQuiz()

    if (isQuizFinished()) {
        const results = getResult()

        return (
            <div className='container'>
                <div className='vh-100 d-flex flex-column gap-4 justify-content-center align-items-center'>
                    <div className='d-flex flex-column gap-3 align-items-center' style={{ width: '300px' }}>
                        <h3 className='m-0 p-0'>RESULTADO</h3>

                        <div className='w-100 member-card member-card-gold'>
                            <div className='p-3 d-flex flex-column gap-3 justify-content-center align-items-center'>
                                <img className='member-avatar shadow-lg' src={results[0].picture}/>
                                <h3>{results[0].name.toUpperCase()}</h3>
                            </div>
                        </div>

                        <h4 className='m-0 p-0'>PRÓXIMOS</h4>

                        <div className='w-100 member-card'>
                            <div className='px-3 py-2 d-flex gap-3 justify-content-center align-items-center'>
                                <img className='member-avatar-min' src={results[1].picture}/>
                                <h3 className='m-0 p-0'>{results[1].name.toUpperCase()}</h3>
                            </div>
                        </div>

                        <div className='w-100 member-card'>
                            <div className='px-3 py-2 d-flex gap-3 justify-content-center align-items-center'>
                                <img className='member-avatar-min' src={results[2].picture}/>
                                <h3 className='m-0 p-0'>{results[2].name.toUpperCase()}</h3>
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
                                    <button
                                        className='button-card'
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                    >
                                        {answer}
                                    </button>
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