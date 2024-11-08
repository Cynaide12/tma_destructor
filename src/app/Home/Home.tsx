import { FC } from "react";
import { Page } from "../Page/Page";
import { Container } from "../../components/Container/Container";

import "./home.scss"

export const Home: FC = () => {
    return (
        <Page>
            <Container>
                <img src="/src/assets/avatar.svg" alt="sticker" className="clicker__img" />
            </Container>
        </Page>
    )
}