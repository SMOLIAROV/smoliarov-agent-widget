import { useAuthFlow } from "@/flow/hooks/useAuthFlow"
import { useState } from "preact/hooks"
import type { AuthStep } from "../types"
import { useErrorMessages } from "@/shared/hooks/useErrorMessages"

export function useEmailStep() {
    const [step, setStep] = useState<AuthStep>("email")
    const [email, setEmail] = useState("")
    const [error, setError] = useState<string | null>(null)
    const { openChat } = useAuthFlow()
    const errors = useErrorMessages()

    function isValidEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function handleEmailSubmit(nextEmail: string) {
        const normalizedEmail = nextEmail.trim()

        if (!isValidEmail(normalizedEmail)) {
            setError(errors.invalidEmail)
            return
        }

        setError(null)
        setEmail(normalizedEmail)
        setStep("verification")
    }

    function handleVerificationBack() {
        setError(null)
        setStep("email")
    }

    function handleVerificationSubmit(code: string) {
        if (code !== "123456") {
            setError(errors.invalidVerificationCode)
            return
        }

        setError(null)
        openChat()
    }

    return {
        step,
        email,
        error,
        handleEmailSubmit,
        handleVerificationBack,
        handleVerificationSubmit,
    }
}
