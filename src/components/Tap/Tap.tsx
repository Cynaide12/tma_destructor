import { FC, useEffect, useState } from "react";
import { Container } from "../Container/Container";
import PointStore from "../../store/PointsStore";
import { observer } from "mobx-react-lite";

import "./tap.scss"
import { ClassName } from "../../helpers/ClassName";

export const Tap: FC = observer(() => {


    const [isAnimate, setIsAnimate] = useState(false)

    // const TapClickHandler = () => {
    //     PointStore.AddPoint(PointStore.pointOnTap)
    // }


    useEffect(() => {
        if (isAnimate) {
            setTimeout(() => {
                setIsAnimate(false)
            }, 100)
        }
    }, [isAnimate])

    const TapHandler = () => {
        setIsAnimate(true)
        PointStore.AddPoint(PointStore.GetPointOnTap)
        // console.log(PointStore.GetPoints)
    }

    return (
    <>

        <Container onClick={TapHandler} onTouchEnd={TapHandler} className={ClassName("tap__container", (isAnimate ? "tap__animate" : ''))}>
            <img src="/src/assets/tap-lv1.png" alt="sticker" className="tap__img" />
        </Container>
    </>
)
})