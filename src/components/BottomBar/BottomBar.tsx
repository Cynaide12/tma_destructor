import { Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { FC } from "react";
import { Container } from "../Container/Container";
import { useLocation, useNavigate } from "react-router-dom";

import "./bottombar.scss"

export const BottomBar: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <Container>
            <Tabbar>
                <TabbarItem selected={pathname == "/tasks"}
                    onClick={() => { navigate("/tasks"); }}
                    text="Задания">
                    <svg className="bottombar__icon" fill="currentColor"><use xlinkHref={"/src/assets/task.svg#task"} /></svg>
                </TabbarItem>
                <TabbarItem selected={pathname == "/"}
                    onClick={() => { navigate("/"); }}
                    text="Тапать">
                    <svg className="bottombar__icon" fill="currentColor"><use xlinkHref={"/src/assets/money.svg#money"} /></svg>
                </TabbarItem>
                <TabbarItem selected={pathname == "/top"}
                    onClick={() => { navigate("/top"); }}
                    text="Топ">
                    <svg className="bottombar__icon" fill="currentColor"><use xlinkHref={"/src/assets/cubok.svg#cubok"} /></svg>
                </TabbarItem>
            </Tabbar>
        </Container>
    );
};
