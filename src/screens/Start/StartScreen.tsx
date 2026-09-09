import { WidgetHeader } from "@/widget/WidgetHeader"
import { StartHero } from "./StartHero"
import { StartActions } from "./StartActions"
import { useStartFlow } from "@/flow/hooks/useStartFlow"
import type { JSX } from "preact/jsx-runtime"
import { useState } from "preact/hooks"

export function StartScreen() {
    const { openLogin, continueAnonymously } = useStartFlow()

    const [isPolicyAccepted, setPolicyAccepted] = useState(false)

    function onPolicyChange(event: JSX.TargetedEvent<HTMLInputElement, Event>) {
        setPolicyAccepted(event.currentTarget.checked)
    }

    return (
        <>
            <WidgetHeader />

            <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 overflow-y-auto px-5 py-8 sm:px-8">
                <StartHero />
                <StartActions
                    isPolicyAccepted={isPolicyAccepted}
                    onPolicyChange={onPolicyChange}
                    onLogin={openLogin}
                    onContinueAnonymously={continueAnonymously}
                />
            </div>
        </>
    )
}
