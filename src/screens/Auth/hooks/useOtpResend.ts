import { useEffect, useState } from "preact/hooks"
import type { UseResendOtpOptions } from "./types"
import { RESEND_COOLDOWN_SECONDS } from "../constants"
import { useErrorMessages } from "@/shared/hooks/useErrorMessages"

export function useOtpResend({ onResend }: UseResendOtpOptions) {
    const [isLoading, setIsLoading] = useState(false)
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const errors = useErrorMessages()

    const canResend = !isLoading && secondsLeft === 0

    useEffect(() => {
        if (secondsLeft === 0) {
            return
        }

        const timer = window.setTimeout(() => {
            setSecondsLeft((value) => Math.max(value - 1, 0))
        }, 1000)

        return () => {
            window.clearTimeout(timer)
        }
    }, [secondsLeft])

    async function handleResend() {
        if (!canResend) {
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            await onResend()
            setSecondsLeft(RESEND_COOLDOWN_SECONDS)
        } catch (cause) {
            setError(errors.resendFailed)
            throw cause
        } finally {
            setIsLoading(false)
        }
    }

    return {
        handleResend,
        isLoading,
        secondsLeft,
        canResend,
        error,
    }
}
