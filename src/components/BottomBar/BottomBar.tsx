import { Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { FC } from "react";
import { Container } from "../Container/Container";

export const BottomBar: FC = () => {
    return (
        <Container>
            <Tabbar className="bottom">
                <TabbarItem selected text="Earn" />
                <TabbarItem text="Tasks" />
                <TabbarItem text="Top" />
            </Tabbar>
        </Container>
    )
}