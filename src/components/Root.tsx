import { TonConnectUIProvider } from "@tonconnect/ui-react";
import App from "../App";

export function Root() {
    return (
        <TonConnectUIProvider manifestUrl={'../../public/tonconnect.manifes.json'}>
            <App />
        </TonConnectUIProvider>
    )
}