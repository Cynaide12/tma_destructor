import { initData, useSignal } from "@telegram-apps/sdk-react"
import { Image } from "@telegram-apps/telegram-ui"

import "./topbar.scss"
import { TonConnectButton } from "@tonconnect/ui-react"
import { Container } from "../Container/Container"

interface userData {
    title: string
    value: any
}

export const TopBar = () => {
    const initDataState = useSignal(initData.state)
    if (!initDataState || !initDataState.user) return
    // const initDataRows = useMemo<userData[] | undefined>(() => {
    //     if (!initDataState || !initDataState.user) {
    //         return
    //     }
    //     const { username, photoUrl } = initDataState.user
    //     return [
    //         { title: "username", value: username },
    //         { title: 'photourl', value: photoUrl }
    //     ]
    // }, [initDataState])

    // if (!initDataRows) {
    //     return (
    //         <Placeholder
    //             topbar="Упс..."
    //             description="Приложене запустилось без стартовых параметров">
    //             <img
    //                 alt="Telegram sticker"
    //                 src="https://xelene.me/telegram.gif"
    //                 style={{ display: 'block', width: '144px', height: '144px' }}
    //             />
    //         </Placeholder>
    //     )
    // }
    const username = initDataState.user.username
    return (
        <Container className="topbar__container">
            <div className="topbar__left">
                <Image src="/src/assets/avatar.svg" size={28} alt="avatar" className="topbar__avatar" />
                <span>@{username}</span>
            </div>
            <div className="topbar_right">
                <TonConnectButton className="tonconnect_button" />
            </div>
        </Container>
    )
}