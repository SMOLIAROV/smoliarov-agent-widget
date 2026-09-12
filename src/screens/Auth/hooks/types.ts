export interface UseOtpInputOptions {
    length: number
    onChange?: (code: string) => void
    onComplete?: (code: string) => void
}
