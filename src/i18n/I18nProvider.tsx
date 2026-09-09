import { en, ru } from "./locales"
import { I18nContext } from "./context"
import type { I18nProviderProps } from "./types"

const dictionaries = {
    en,
    ru,
}

export function I18nProvider({ locale, children }: I18nProviderProps) {
    const dict = dictionaries[locale]

    return (
        <I18nContext.Provider
            value={{
                locale,
                dict,
            }}
        >
            {children}
        </I18nContext.Provider>
    )
}
