import { WidgetHeader } from "@/widget/WidgetHeader"
import { StartHero } from "./StartHero"
import { StartActions } from "./StartActions"
import { useStartFlow } from "@/flow/hooks/useStartFlow"
import type { JSX } from "preact/jsx-runtime"
import { useState } from "preact/hooks"
import { ScreenContent } from "@/shared/components/ScreenContent/ScreenContent"

export function StartScreen() {
    const { openLogin, continueAnonymously } = useStartFlow()

    const [isPolicyAccepted, setPolicyAccepted] = useState(false)

    function onPolicyChange(event: JSX.TargetedEvent<HTMLInputElement, Event>) {
        setPolicyAccepted(event.currentTarget.checked)
    }

    return (
        <>
            <WidgetHeader />

            <ScreenContent>
                <StartHero />
                <StartActions
                    isPolicyAccepted={isPolicyAccepted}
                    onPolicyChange={onPolicyChange}
                    onLogin={openLogin}
                    onContinueAnonymously={continueAnonymously}
                />
            </ScreenContent>
        </>
    )
}
