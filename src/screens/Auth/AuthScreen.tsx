import { WidgetHeader } from "@/widget/WidgetHeader"
import { VerifyEmailStep } from "./components/VerifyEmailStep/VerifyEmailStep"
import { EmailStep } from "./components/EmailStep/EmailStep"
import { useAuthFlow } from "@/flow/hooks/useAuthFlow"
import { ErrorBanner } from "@/shared/components/ErrorBanner/ErrorBanner"
import { useEmailStep } from "./hooks/useEmailStep"
import { ScreenContent } from "@/shared/components/ScreenContent/ScreenContent"

export function AuthScreen() {
    const {
        step,
        email,
        error,
        handleEmailSubmit,
        handleVerificationBack,
        handleVerificationSubmit,
    } = useEmailStep()
    const { openStart } = useAuthFlow()

    return (
        <>
            <WidgetHeader />

            <ScreenContent>
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
                {error && <ErrorBanner message={error} />}
            </ScreenContent>
        </>
    )
}
