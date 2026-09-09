import { useContext } from "preact/hooks"
import { WidgetContext } from "../context"
import { ERROR_MESSAGES } from "@/errors/messages"

export function useWidget() {
    const context = useContext(WidgetContext)

    if (!context) {
        throw new Error(ERROR_MESSAGES.WIDGET_CONTEXT)
    }

    return context
}
