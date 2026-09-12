import { WidgetHeader } from "@/widget/WidgetHeader"
import { useState } from "preact/hooks"
import type { AuthStep } from "./types"
import { VerifyEmailStep } from "./components/VerifyEmailStep/VerifyEmailStep"
import { EmailStep } from "./components/EmailStep/EmailStep"
import { useAuthFlow } from "@/flow/hooks/useAuthFlow"

export function AuthScreen() {
    const [step, setStep] = useState<AuthStep>("email")
    const [email, setEmail] = useState("")
    const { openStart, openChat } = useAuthFlow()

    function handleEmailSubmit(nextEmail: string) {
        setEmail(nextEmail)
        setStep("verification")
    }

    function handleVerificationBack() {
        setStep("email")
    }

    function handleVerificationSubmit(code: string) {
        console.log({ email, code })
        openChat()
    }

    return (
        <>
            <WidgetHeader />

            <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 overflow-y-auto px-5 py-8 sm:px-8">
                {step === "email" ? (
                    <EmailStep
                        onSubmit={handleEmailSubmit}
                        onBack={openStart}
                    />
                ) : (
                    <VerifyEmailStep
                        email={email}
                        onBack={handleVerificationBack}
                        onSubmit={handleVerificationSubmit}
                    />
                )}
            </div>
        </>
    )
}
