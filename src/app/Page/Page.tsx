import { backButton } from "@telegram-apps/sdk-react";
import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./page.scss"

interface PageProps {
    children: ReactNode
    back?: boolean
}

export const Page: FC<PageProps> = ({ children, back = true }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (back) {
            backButton.show()
            return backButton.onClick(() => {
                navigate(-1)
            })
        }
        backButton.hide()
    }, [back])

    return (
        <div className="page">
            {children}
        </div>
    )
}