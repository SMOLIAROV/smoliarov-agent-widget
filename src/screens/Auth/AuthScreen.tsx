import { WidgetHeader } from "@/widget/WidgetHeader"
import { VerifyEmailStep } from "./components/VerifyEmailStep/VerifyEmailStep"
import { EmailStep } from "./components/EmailStep/EmailStep"
import { useAuthFlow } from "@/flow/hooks/useAuthFlow"
import { ErrorBanner } from "@/shared/components/ErrorBanner/ErrorBanner"
import { useEmailStep } from "./hooks/useEmailStep"

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
                {error && <ErrorBanner message={error} />}
            </div>
        </>
    )
}
