import type { MouseEventHandler, TargetedEvent } from "preact"

export interface StartActionsProps {
    isPolicyAccepted: boolean
    onPolicyChange: (_event: TargetedEvent<HTMLInputElement, Event>) => void
    onLogin: MouseEventHandler<HTMLButtonElement>
    onContinueAnonymously: MouseEventHandler<HTMLButtonElement>
}
