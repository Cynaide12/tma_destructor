import { FC, useEffect, useState } from "react";
import { Container } from "../Container/Container";
import PointStore from "../../store/PointsStore";
import { observer } from "mobx-react-lite";

import "./tap.scss"
import { ClassName } from "../../helpers/ClassName";

export const Tap: FC = observer(() => {
    const [isAnimate, setIsAnimate] = useState(false)

    useEffect(() => {
        if (isAnimate) {
            setTimeout(() => {
                setIsAnimate(false)
            }, 100)
        }
    }, [isAnimate])

    const TapHandler = () => {
        setIsAnimate(true)
        const isOkTap = PointStore.SubEnergy(PointStore.GetEnergy - PointStore.getRandomEnergy(PointStore.maxEnergyOnTap))
        if (isOkTap) {
            PointStore.AddPoint(PointStore.GetPointOnTap)
        }

    }

    return (
        <>

            <Container
                onClick={TapHandler}
                className={ClassName(
                    "tap__container",
                    (isAnimate ? "tap__animate" : '')
                )}>
                <img src="/src/assets/token.png" alt="sticker" className="tap__img" draggable="false" />
            </Container>
        </>
    )
})
