import { I18nProvider } from "@/i18n/I18nProvider"
import { Widget } from "@/widget/Widget"
import type { AppProps } from "./types"

export default function App({ locale = "en" }: AppProps) {
    return (
        <I18nProvider locale={locale}>
            <Widget />
        </I18nProvider>
    )
}
