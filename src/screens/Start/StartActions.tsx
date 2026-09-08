import { FLOW_SCREEN } from "../../flow/constants"
import type { StartActionsProps } from "./types"
import { Button } from "../../shared/components/Button/Button"
import { PoliciesCheckbox } from "./components/PoliciesCheckbox"
import { useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"

export function StartActions({ navigate }: StartActionsProps) {
    const [isChecked, setIsChecked] = useState(false)

    function handleChange(event: JSX.TargetedEvent<HTMLInputElement, Event>) {
        setIsChecked(event.currentTarget.checked)
    }

    return (
        <div className="flex flex-col gap-2.5">
            <Button
                onClick={() => navigate(FLOW_SCREEN.AUTH)}
                disabled={!isChecked}
                className="bg-chat-accent text-chat-accent-foreground flex min-h-12 cursor-pointer items-center justify-center rounded-xl px-4 text-sm font-medium transition-opacity select-none hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-35"
            >
                Войти по email
            </Button>

            <Button
                onClick={() => navigate(FLOW_SCREEN.CHAT)}
                disabled={!isChecked}
                className="border-chat-border text-chat-foreground enabled:hover:border-chat-accent/60 enabled:hover:bg-chat-surface flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-4 text-sm transition-colors select-none disabled:cursor-not-allowed disabled:opacity-35"
            >
                Продолжить анонимно
            </Button>

            <PoliciesCheckbox isChecked={isChecked} onChange={handleChange} />
        </div>
    )
}
