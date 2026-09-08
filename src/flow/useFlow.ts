import { useContext } from "preact/hooks"
import { FlowContext } from "./context"

export function useFlow() {
    const context = useContext(FlowContext)

    if (!context) {
        throw new Error("useFlow must be used inside Flow")
    }

    return context
}
