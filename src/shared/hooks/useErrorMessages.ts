import { useDict } from "@/i18n/hooks/useDict"

export function useErrorMessages() {
    const dict = useDict()

    return {
        internal: dict.errors.internal,
        invalidEmail: dict.errors.invalidEmail,
        invalidVerificationCode: dict.errors.invalidVerificationCode,
        resendFailed: dict.errors.resendFailed,
        sendMessageFailed: dict.errors.sendMessageFailed,
    }
}
