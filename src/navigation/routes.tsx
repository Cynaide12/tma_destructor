import { Navigate } from "react-router-dom"
import { Home } from "../app/Home/Home"
import { Targets } from "../app/Targets/Targets"
import { TopList } from "../app/TopList/TopList"

interface Route {
    path: string
    element: JSX.Element
}

export const routes: Route[] = [
    { path: '*', element: <Navigate to="/" />},
    { path: '/tasks', element: <Targets />, },
    { path: '/', element: <Home />, },
    { path: '/top', element: <TopList /> },
]