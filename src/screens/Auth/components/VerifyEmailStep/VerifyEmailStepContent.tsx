import { useDict } from "@/i18n/hooks/useDict"
import type { VerifyEmailStepContentProps } from "./types"

export function VerifyEmailStepContent({ email }: VerifyEmailStepContentProps) {
    const dict = useDict()

    return (
        <div className="flex flex-col gap-2">
            <p className="text-chat-muted font-mono text-[10px] tracking-[0.18em] uppercase">
                {dict.auth.emailVerificationStep.label}
            </p>

            <h2 className="text-chat-foreground text-2xl font-medium tracking-tight">
                {dict.auth.emailVerificationStep.title}
            </h2>

            <p className="text-chat-muted text-sm leading-6">
                {dict.auth.emailVerificationStep.description} {email}
            </p>
        </div>
    )
}
