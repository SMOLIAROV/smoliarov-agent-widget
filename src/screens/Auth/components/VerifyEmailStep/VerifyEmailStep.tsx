import { ButtonBack } from "@/shared/components/ButtonBack/ButtonBack"
import { Button } from "@/shared/components/Button/Button"
import { VerifyEmailStepForm } from "./VerifyEmailStepForm"
import { useDict } from "@/i18n/hooks/useDict"
import type { VerifyEmailStepProps } from "./types"
import { VerifyEmailStepContent } from "./VerifyEmailStepContent"
import { useOtpResend } from "../../hooks/useOtpResend"

export function VerifyEmailStep({
    email,
    onBack,
    onSubmit,
}: VerifyEmailStepProps) {
    const dict = useDict()

    const { handleResend, secondsLeft, canResend } = useOtpResend({
        onResend: async () => {
            await console.log("click")
        },
    })

    return (
        <>
            <ButtonBack onBack={onBack} />
            <VerifyEmailStepContent email={email} />
            <VerifyEmailStepForm onSubmit={onSubmit} />
            <Button
                className="text-chat-muted hover:text-chat-foreground disabled:text-chat-muted disabled:hover:text-chat-muted cursor-pointer text-xs underline underline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleResend}
                disabled={!canResend}
            >
                {secondsLeft > 0
                    ? `${dict.auth.emailVerificationStep.resend} (${secondsLeft})`
                    : dict.auth.emailVerificationStep.resend}
            </Button>
        </>
    )
}
