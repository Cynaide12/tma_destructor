import { FC } from "react"
import PointsStore from "../../store/PointsStore"
import { Container } from "../Container/Container"

import "./dispalygamedata.scss"

export const DisplayGameData: FC = () => {

    return (
        <Container className="display__container">
            <div className="display__item display__point">
                <span className="display__text">Points: {PointsStore.points}</span>
            </div>
            <div className="display__item display__energy">
                <span className="display__text">Energy: {PointsStore.energy}</span>
            </div>
            <div className="display__item display__energy">
                <span className="display__text">EarnPerTap: {PointsStore.pointOnTap}</span>
            </div>
        </Container>
    )
}