import { useContext } from "preact/hooks"
import { ERROR_MESSAGES } from "@/errors/messages"
import { FlowContext } from "../context"

export function useFlow() {
    const context = useContext(FlowContext)

    if (!context) {
        throw new Error(ERROR_MESSAGES.FLOW_CONTEXT)
    }

    return context
}
