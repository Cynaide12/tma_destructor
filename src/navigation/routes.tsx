import { Home } from "../app/Home/Home"
import { Targets } from "../app/Targets/Targets"
import { TopList } from "../app/TopList/TopList"

interface Route {
    path: string
    element: JSX.Element
    title: string
}

export const routes: Route[] = [
    { path: '/', element: <Home />, title: "Тапать" },
    { path: '/targets', element: <Targets />, title: "Задания" },
    { path: '/top', element: <TopList />, title: "Топ" },
]