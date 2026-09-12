export interface VerifyEmailStepProps {
    email: string
    onBack: () => void
    onSubmit: (code: string) => void
}

export interface VerifyEmailStepContentProps {
    email: string
}

export interface VerifyEmailStepFormProps {
    onSubmit: (code: string) => void
}

export interface VerifyEmailStepFormInputProps {
    length?: number
    onChange?: (code: string) => void
}
