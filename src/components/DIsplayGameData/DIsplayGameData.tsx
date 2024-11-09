import { FC } from "react"
import PointsStore from "../../store/PointsStore"
import { Container } from "../Container/Container"

import "./dispalygamedata.scss"
import { observer } from "mobx-react-lite"

export const DisplayGameData: FC = observer(() => {
    
    return (
        <Container className="display__container">
            <div className="display__item display__point">
                <span className="display__text">Points: {PointsStore.GetPoints}</span>
            </div>
            <div className="display__item display__energy">
                <span className="display__text">Energy: {PointsStore.GetEnergy}</span>
            </div>
            <div className="display__item display__energy">
                <span className="display__text">EarnPerTap: {PointsStore.GetPointOnTap}</span>
            </div>
        </Container>
    )
})