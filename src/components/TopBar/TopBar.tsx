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
    const username = initDataState.user.username
    return (
        <Container className="topbar__container">
            <div className="topbar__left">
                <svg className="topbar__avatar" fill="currentColor"><use xlinkHref={"/src/assets/avatar.svg#avatar"} /></svg>
                <span>@{username}</span>
            </div>
            <div className="topbar_right">
                <TonConnectButton className="tonconnect_button" />
            </div>
        </Container>
    )
}