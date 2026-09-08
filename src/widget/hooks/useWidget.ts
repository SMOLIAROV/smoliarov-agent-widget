import { useContext } from "preact/hooks"
import { WidgetContext } from "../context"

export function useWidget() {
    const context = useContext(WidgetContext)

    if (!context) {
        throw new Error("useWidget must be used inside WidgetProvider")
    }

    return context
}
