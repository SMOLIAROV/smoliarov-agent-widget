import { useContext } from "preact/hooks"
import { FlowContext } from "./context"
import { ERROR_MESSAGES } from "@/errors/messages"

export function useFlow() {
    const context = useContext(FlowContext)

    if (!context) {
        throw new Error(ERROR_MESSAGES.FLOW_CONTEXT)
    }

    return context
}
