import { createBrowserRouter } from 'react-router-dom'
import { Home, Members, Quiz } from './pages'
import APP_ROUTES from './constants/routes'

const Router = createBrowserRouter([
    {
        path: APP_ROUTES.Home,
        element: (
            <Home/>
        )
    },
    {
        path: APP_ROUTES.Quiz,
        element: (
            <Quiz/>
        )
    },
    {
        path: APP_ROUTES.Members,
        element: (
            <Members/>
        )
    }
])

export default Router