import type { ComponentChildren } from "preact"
import type { en } from "./locales/en"

export type Dictionary = typeof en

export type Locale = "en" | "ru"

export interface I18nProviderProps {
    locale: Locale
    children: ComponentChildren
}
