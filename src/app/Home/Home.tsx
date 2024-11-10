import { FC } from "react";
import { Page } from "../Page/Page";

import "./home.scss"
import { Tap } from "../../components/Tap/Tap";
import { DisplayGameData } from "../../components/DIsplayGameData/DIsplayGameData";

export const Home: FC = () => {
    return (
        <Page back={false}>
            <DisplayGameData />
            <Tap />
        </Page>
    )
}