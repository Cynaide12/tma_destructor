import { FC } from "react"
import { Page } from "../Page/Page"
import { Container } from "../../components/Container/Container"
import PoinsStore from "../../store/PointsStore"

import "./toplist.scss"
import { TopListCard } from "./components/TopListCard/TopListCard"

export const TopList: FC = () => {

    return (
        <Page back>
            <Container className="top__container">
                <TopListCard username="Ты" points={PoinsStore.GetPoints} />
                <TopListCard username="Мафиозник" points={228000} />
                <TopListCard username="Мафиозник1" points={228000} />
                <TopListCard username="Мафиозник2" points={228000} />
                <TopListCard username="Мафиозник3" points={228000} />
                <TopListCard username="Мафиозник4" points={228000} />
                <TopListCard username="Мафиозник5" points={228000} />
                <TopListCard username="Мафиозник6" points={228000} />
                <TopListCard username="Мафиозник7" points={228000} />
                <TopListCard username="Мафиозник8" points={228000} />
                <TopListCard username="Мафиозник9" points={228000} />

            </Container>
        </Page>
    )
}