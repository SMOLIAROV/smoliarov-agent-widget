import { Button } from "@/shared/components/Button/Button"
import { VerifyEmailStepFormInput } from "./VerifyEmailStepFormInput"
import { useState } from "preact/hooks"
import { useDict } from "@/i18n/hooks/useDict"
import type { VerifyEmailStepFormProps } from "./types"
import { VERIFICATION_CODE_LENGTH } from "../../constants"

export function VerifyEmailStepForm({ onSubmit }: VerifyEmailStepFormProps) {
    const dict = useDict()
    const [code, setCode] = useState("")

    function handleCodeChange(code: string) {
        setCode(code)
    }

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-8"
        >
            <VerifyEmailStepFormInput onChange={handleCodeChange} />

            <Button
                type="submit"
                disabled={code.length !== VERIFICATION_CODE_LENGTH}
                onClick={async () => {
                    onSubmit(code)
                }}
                className="bg-chat-accent text-chat-accent-foreground min-h-12 cursor-pointer rounded-xl text-sm font-medium disabled:cursor-not-allowed disabled:opacity-35"
            >
                {dict.auth.emailVerificationStep.confirm}
            </Button>
        </form>
    )
}
