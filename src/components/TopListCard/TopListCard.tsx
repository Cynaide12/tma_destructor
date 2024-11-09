import { Container } from "../Container/Container"

export const TopListCard = (props: { username: string, points: number }) => {
    return (
        <Container className="top__cardContainer">
            <div className="top__left">
                <img src="/src/assets/avatar.svg" alt="" className="top__avatar" />
                <span className="top__username">{props.username}</span>
            </div>
            <div className="top__right">
                <span className="top__username">{props.points}</span>
                <img src="/src/assets/token-mini.png" alt="" className="top__token" />
            </div>
        </Container>
    )
}