import { ReactNode, type FC } from "react"
import cs from "./container.module.scss"

interface ContainerProps {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
    return <div className={cs.container}>{children}</div>
}