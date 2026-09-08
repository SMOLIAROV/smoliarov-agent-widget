import { WidgetHeader } from "../../widget/WidgetHeader"
import type { ScreenProps } from "../types"
import { StartHero } from "./StartHero"
import { StartActions } from "./StartActions"

export function StartScreen({ navigate }: ScreenProps) {
    return (
        <>
            <WidgetHeader />

            <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 overflow-y-auto px-5 py-8 sm:px-8">
                <StartHero />
                <StartActions navigate={navigate} />
            </div>
        </>
    )
}
