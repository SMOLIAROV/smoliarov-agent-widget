import { useContext } from "preact/hooks"
import { ERROR_MESSAGES } from "@/errors/messages"
import { I18nContext } from "../context"

export function useI18n() {
    const context = useContext(I18nContext)

    if (!context) {
        throw new Error(ERROR_MESSAGES.I18N_CONTEXT)
    }

    return context
}
