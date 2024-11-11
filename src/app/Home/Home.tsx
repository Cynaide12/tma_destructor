import { FC } from "react";
import { Page } from "../Page/Page";

import "./home.scss"
import { Tap } from "../../components/Tap/Tap";
import { DisplayGameData } from "../../components/DIsplayGameData/DIsplayGameData";
import { BoostsModal } from "../../components/BoostsModal/BoostsModal";
import { Button } from "@telegram-apps/telegram-ui";

export const Home: FC = () => {
    return (
        <Page back={false}>
            <DisplayGameData />
            <Tap />
            <BoostsModal
                trigger={<div className="openModal__container"><Button size="m">Бустеры</Button></div>}
            />
        </Page>
    )
}