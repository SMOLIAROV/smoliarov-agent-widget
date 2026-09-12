import { Button } from "@/shared/components/Button/Button"
import { useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"
import { useDict } from "@/i18n/hooks/useDict"
import type { EmailStepFormProps } from "./types"

export function EmailStepForm({ onSubmit }: EmailStepFormProps) {
    const dict = useDict()
    const [email, setEmail] = useState("")

    function handleSubmit(event: JSX.TargetedEvent<HTMLFormElement, Event>) {
        event.preventDefault()
        onSubmit(email.trim())
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onInput={(event) => {
                    setEmail(event.currentTarget.value)
                }}
                required
                placeholder={dict.auth.emailStep.input.placeholder}
                autoComplete="email"
                aria-label={dict.auth.emailStep.input.label}
                className="border-chat-border bg-chat-surface text-chat-foreground placeholder:text-chat-muted focus:border-chat-accent/70 min-h-12 rounded-xl border px-4 text-base outline-none"
            />

            <Button
                type="submit"
                disabled={!email.trim()}
                className="bg-chat-accent text-chat-accent-foreground min-h-12 cursor-pointer rounded-xl text-sm font-medium disabled:cursor-not-allowed disabled:opacity-35"
            >
                {dict.auth.emailStep.send}
            </Button>
        </form>
    )
}
