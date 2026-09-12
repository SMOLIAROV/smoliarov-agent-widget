import { ButtonBack } from "@/shared/components/ButtonBack/ButtonBack"
import { Button } from "@/shared/components/Button/Button"
import { VerifyEmailStepForm } from "./VerifyEmailStepForm"
import { useDict } from "@/i18n/hooks/useDict"
import type { VerifyEmailStepProps } from "./types"
import { VerifyEmailStepContent } from "./VerifyEmailStepContent"

export function VerifyEmailStep({
    email,
    onBack,
    onSubmit,
}: VerifyEmailStepProps) {
    const dict = useDict()

    return (
        <>
            <ButtonBack onBack={onBack} />
            <VerifyEmailStepContent email={email} />
            <VerifyEmailStepForm onSubmit={onSubmit} />
            <Button className="text-chat-muted hover:text-chat-foreground cursor-pointer text-xs underline underline-offset-2">
                {dict.auth.emailVerificationStep.resend}
            </Button>
        </>
    )
}
