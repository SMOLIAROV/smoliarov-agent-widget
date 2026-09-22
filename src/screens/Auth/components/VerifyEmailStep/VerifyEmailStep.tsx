import { ButtonBack } from "@/shared/components/ButtonBack/ButtonBack"
import { Button } from "@/shared/components/Button/Button"
import { VerifyEmailStepForm } from "./VerifyEmailStepForm"
import { useDict } from "@/i18n/hooks/useDict"
import type { VerifyEmailStepProps } from "./types"
import { VerifyEmailStepContent } from "./VerifyEmailStepContent"
import { useOtpResend } from "../../hooks/useOtpResend"
import { ErrorBanner } from "@/shared/components/ErrorBanner/ErrorBanner"

export function VerifyEmailStep({
    email,
    onBack,
    onSubmit,
}: VerifyEmailStepProps) {
    const dict = useDict()

    const { handleResend, secondsLeft, canResend, error } = useOtpResend({
        onResend: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log("Code resent to", email)
        },
    })

    console.log("Test code: 123456")

    return (
        <>
            <ButtonBack onBack={onBack} />
            <VerifyEmailStepContent email={email} />
            <VerifyEmailStepForm onSubmit={onSubmit} />
            <Button
                className="text-chat-muted hover:text-chat-foreground disabled:text-chat-muted disabled:hover:text-chat-muted flex cursor-pointer justify-center text-xs underline underline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleResend}
                disabled={!canResend}
            >
                {secondsLeft > 0
                    ? `${dict.auth.emailVerificationStep.resend} (${secondsLeft})`
                    : dict.auth.emailVerificationStep.resend}
            </Button>

            {error && <ErrorBanner message={error} />}
        </>
    )
}
