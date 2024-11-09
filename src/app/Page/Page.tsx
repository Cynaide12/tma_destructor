import { backButton } from "@telegram-apps/sdk-react";
import { CSSProperties, FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./page.scss"
import { ClassName } from "../../helpers/ClassName";

interface PageProps {
    children: ReactNode
    back?: boolean
    className?: string
    style?: CSSProperties
}

export const Page: FC<PageProps> = ({ children, back = true, className, style }) => {
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
        <div style={style} className={ClassName('page', className || '')}>
            {children}
        </div>
    )
}