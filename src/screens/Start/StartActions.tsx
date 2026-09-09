import type { StartActionsProps } from "./types"
import { Button } from "@/shared/components/Button/Button"
import { PoliciesCheckbox } from "./components/PoliciesCheckbox"
import { useDict } from "@/i18n/hooks/useDict"

export function StartActions({
    isPolicyAccepted,
    onPolicyChange,
    onLogin,
    onContinueAnonymously,
}: StartActionsProps) {
    const dict = useDict()

    return (
        <div className="flex flex-col gap-2.5">
            <Button
                onClick={onLogin}
                disabled={!isPolicyAccepted}
                className="bg-chat-accent text-chat-accent-foreground flex min-h-12 cursor-pointer items-center justify-center rounded-xl px-4 text-sm font-medium transition-opacity select-none hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-35"
            >
                {dict.start.login}
            </Button>

            <Button
                onClick={onContinueAnonymously}
                disabled={!isPolicyAccepted}
                className="border-chat-border text-chat-foreground enabled:hover:border-chat-accent/60 enabled:hover:bg-chat-surface flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-4 text-sm transition-colors select-none disabled:cursor-not-allowed disabled:opacity-35"
            >
                {dict.start.anonymous}
            </Button>

            <PoliciesCheckbox
                isChecked={isPolicyAccepted}
                onChange={onPolicyChange}
            />
        </div>
    )
}
