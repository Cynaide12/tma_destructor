import { FC } from "react"
import { Page } from "../Page/Page"
import { Container } from "../../components/Container/Container"
import PoinsStore from "../../store/PointsStore"

import "./toplist.scss"
import { TopListCard } from "../../components/TopListCard/TopListCard"

export const TopList: FC = () => {

    return (
        <Page back>
            <Container className="top__container">
                <TopListCard username="Ты" points={PoinsStore.GetPoints} />

                <TopListCard username="Мафиозник" points={228000} />
            </Container>
        </Page>
    )
}