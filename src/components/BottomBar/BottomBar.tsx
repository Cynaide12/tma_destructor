import { Tabbar } from "@telegram-apps/telegram-ui";
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { FC } from "react"; 
import { Container } from "../Container/Container";
import { useLocation, useNavigate } from "react-router-dom"; 
import { routes } from "../../navigation/routes";

export const BottomBar: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <Container>
            <Tabbar className="bottom">
                {routes.map(({ title, path }) => (
                    <TabbarItem
                        key={path}
                        selected={pathname === path}
                        onClick={() => {
                            navigate(path);
                        }}
                        text={title}
                    />
                ))}
            </Tabbar>
        </Container>
    );
};
