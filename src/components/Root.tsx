import { TonConnectUIProvider } from "@tonconnect/ui-react";
import App from "../App";
import { ErrorBoundary } from "./ErrorBoundary";

function ErrorBoundaryError({ error }: { error: unknown }) {
    return (
        <div>
            <p>An unhandled error occurred:</p>
            <blockquote>
                <code>
                    {error instanceof Error
                        ? error.message
                        : typeof error === 'string'
                            ? error
                            : JSON.stringify(error)}
                </code>
            </blockquote>
        </div>
    );
}

export function Root() {
    return (
        <ErrorBoundary fallback={ErrorBoundaryError}>
            <TonConnectUIProvider manifestUrl={'../../public/tonconnect.manifes.json'}>
                <App />
            </TonConnectUIProvider>
        </ErrorBoundary>
    )
}