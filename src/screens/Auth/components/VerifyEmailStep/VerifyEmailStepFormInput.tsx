import { useDict } from "@/i18n/hooks/useDict"
import { useOtpInput } from "../../hooks/useOtpInput"
import type { VerifyEmailStepFormInputProps } from "./types"
import { VERIFICATION_CODE_LENGTH } from "../../constants"

export function VerifyEmailStepFormInput({
    length = VERIFICATION_CODE_LENGTH,
    onChange,
}: VerifyEmailStepFormInputProps) {
    const dict = useDict()
    const { values, handleInput, handleKeyDown, handlePaste, setInputRef } =
        useOtpInput({
            length,
            onChange,
        })

    return (
        <div
            className="flex justify-center gap-2"
            role="group"
            aria-label={dict.auth.emailVerificationStep.input.labelGroup}
        >
            {values.map((value, index) => (
                <input
                    key={index}
                    ref={(element) => setInputRef(index, element)}
                    value={value}
                    onInput={(event) => handleInput(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    onPaste={handlePaste}
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={1}
                    aria-label={dict.auth.emailVerificationStep.input.label(
                        index + 1,
                        length,
                    )}
                    className="border-chat-border bg-chat-surface text-chat-foreground focus:border-chat-accent h-12 w-10 rounded-xl border text-center text-lg transition-colors outline-none"
                />
            ))}
        </div>
    )
}
