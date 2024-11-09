import { FC } from "react";
import { BottomBar } from "../BottomBar/BottomBar";
import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";

import "./layout.scss"

export const Layout: FC = () => {
    return (
        <div className="layout">
            <TopBar />
            <Outlet />
            <BottomBar />
        </div>
    )
}