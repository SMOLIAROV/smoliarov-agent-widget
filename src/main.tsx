import { render } from "preact";
import { StrictMode } from "preact/compat";
import App from "./app/App";
import "../styles/global.css"

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")!
)