import { Banner, Button, Modal } from "@telegram-apps/telegram-ui";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { ReactNode } from "react";

import "./boostsmodal.scss"
import { Container } from "../Container/Container";

export const BoostsModal = (props: { trigger: ReactNode }) => {

    return (
        <Modal
            header={<ModalHeader />}
            trigger={props.trigger}
        >
            <Container className="boost__container">
                <Banner
                    background={<img alt="Nasa streams" src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864" style={{ width: '150%' }} />}
                    header="Робот"
                    subheader="Будет тапать за вас"
                    type="section"
                    className="boost__banner"
                >
                    <Button
                        mode="white"
                        size="s"
                    >
                        Обновить за 200 токенов
                    </Button>
                </Banner>
            </Container>
            <Container className="boost__container">
                <Banner
                    background={<img alt="Nasa streams" src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864" style={{ width: '150%' }} />}
                    header="Робот"
                    subheader="Будет тапать за вас"
                    type="section"
                    className="boost__banner"
                >
                    <Button
                        mode="white"
                        size="s"
                    >
                        Обновить за 200 токенов
                    </Button>
                </Banner>
            </Container>
        </Modal>
    )
}