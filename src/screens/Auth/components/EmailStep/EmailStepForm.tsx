import { Button } from "@/shared/components/Button/Button"
import { useState } from "preact/hooks"
import { useDict } from "@/i18n/hooks/useDict"
import type { EmailStepFormProps } from "./types"

export function EmailStepForm({ onSubmit }: EmailStepFormProps) {
    const dict = useDict()
    const [email, setEmail] = useState("")

    return (
        <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
            noValidate
        >
            <input
                type="email"
                value={email}
                onInput={(event) => {
                    setEmail(event.currentTarget.value)
                }}
                required
                placeholder={dict.auth.emailStep.input.placeholder}
                aria-label={dict.auth.emailStep.input.label}
                className="border-chat-border bg-chat-surface text-chat-foreground placeholder:text-chat-muted focus:border-chat-accent/70 min-h-12 rounded-xl border px-4 text-base outline-none"
            />

            <Button
                type="submit"
                disabled={!email.trim()}
                onClick={async () => {
                    await onSubmit(email)
                }}
                className="bg-chat-accent text-chat-accent-foreground min-h-12 cursor-pointer rounded-xl text-sm font-medium disabled:cursor-not-allowed disabled:opacity-35"
            >
                {dict.auth.emailStep.send}
            </Button>
        </form>
    )
}
