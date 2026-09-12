import { ButtonBack } from "@/shared/components/ButtonBack/ButtonBack"

import { EmailStepForm } from "./EmailStepForm"
import type { EmailStepProps } from "./types"
import { EmailStepContent } from "./EmailStepContent"

export function EmailStep({ onSubmit, onBack }: EmailStepProps) {
    return (
        <>
            <ButtonBack onBack={onBack} />
            <EmailStepContent />
            <EmailStepForm onSubmit={onSubmit} />
        </>
    )
}
