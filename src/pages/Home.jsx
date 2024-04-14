import { faPlay, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink } from '../components/basics'
import APP_ROUTES from '../constants/routes'

const Home = () => {
    return (
        <div className='vh-100 d-flex flex-column gap-4 justify-content-center align-items-center'>
            <h1>DeltaQuiz</h1>

            <div className='d-flex flex-column gap-3'>
                ¿Qué miembro de la pandi eres?

                <ButtonLink
                    to={APP_ROUTES.Quiz}
                    className='btn-primary'
                    text='Iniciar'
                    icon={faPlay}
                />

                <ButtonLink
                    to={APP_ROUTES.Members}
                    className='btn-secondary'
                    text='Miembros'
                    icon={faUserGroup}
                />
            </div>
        </div>
    )
}

export default Home