import { createContext } from "preact"
import type { Dictionary, Locale } from "./types"

export interface I18nContextValue {
    locale: Locale
    dict: Dictionary
}

export const I18nContext = createContext<I18nContextValue | null>(null)
