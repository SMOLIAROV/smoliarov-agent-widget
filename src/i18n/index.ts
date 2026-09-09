import { en, ru } from "./locales"
import type { Dictionary, Locale } from "./types"

const dictionaries: Record<Locale, Dictionary> = {
    en,
    ru,
}

let currentLocale: Locale = "en"

export function setLocale(locale: Locale) {
    currentLocale = locale
}

export function getDictionary(): Dictionary {
    return dictionaries[currentLocale]
}
