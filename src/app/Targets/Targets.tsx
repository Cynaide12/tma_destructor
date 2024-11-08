import { initData, useSignal } from "@telegram-apps/sdk-react"
import { Cell, Placeholder, Section } from "@telegram-apps/telegram-ui"
import { useMemo } from "react"
import { Page } from "../Page/Page"
import { Container } from "../../components/Container/Container"

interface userData {
    title: string
    value: any
}

export const Targets = () => {
    const initDataState = useSignal(initData.state)
    const initDataRows = useMemo<userData[] | undefined>(() => {
        if (!initDataState || !initDataState.user) {
            return
        }
        const { username, photoUrl } = initDataState.user
        return [
            { title: "username", value: username },
            { title: 'photourl', value: photoUrl }
        ]
    }, [initDataState])

    if (!initDataRows) {
        return (

            <Page>
                <Container>
                    <Placeholder
                        header="Упс..."
                        description="Приложене запустилось без стартовых параметров">
                        <img
                            alt="Telegram sticker"
                            src="https://xelene.me/telegram.gif"
                            style={{ display: 'block', width: '144px', height: '144px' }}
                        />
                    </Placeholder>
                </Container>
            </Page>
        )
    }
    return (
        <Page>
            <Container>
                <Section header="Привет">
                    {initDataRows.map((row) => {
                        return <Cell key={row.title} headers={row.title} description={row.value} />
                    })}
                </Section>
            </Container>
        </Page>
    )
}