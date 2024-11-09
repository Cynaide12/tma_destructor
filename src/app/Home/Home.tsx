import { FC } from "react";
import { Page } from "../Page/Page";

import "./home.scss"
import { Tap } from "../../components/Tap/Tap";
import { DisplayGameData } from "../../components/DIsplayGameData/DIsplayGameData";

export const Home: FC = () => {
    return (
        <Page back={false} style={{ background: "url('/src/assets/lv1-fon.jpg')" }}>
            <DisplayGameData />
            <Tap />
        </Page>
    )
}