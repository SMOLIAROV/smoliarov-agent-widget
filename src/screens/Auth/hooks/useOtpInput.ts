import { useRef, useState } from "preact/hooks"
import type { JSX } from "preact"
import type { UseOtpInputOptions } from "./types"

export function useOtpInput({
    length,
    onChange,
    onComplete,
}: UseOtpInputOptions) {
    const [values, setValues] = useState<string[]>(() =>
        Array.from({ length }, () => ""),
    )

    const inputRefs = useRef<Array<HTMLInputElement | null>>([])

    function focusInput(index: number) {
        if (index < 0 || index >= length) {
            return
        }

        inputRefs.current[index]?.focus()
    }

    function commitValues(nextValues: string[]) {
        setValues(nextValues)

        const code = nextValues.join("")

        onChange?.(code)

        if (nextValues.every(Boolean)) {
            onComplete?.(code)
        }
    }

    function handleInput(
        index: number,
        event: JSX.TargetedEvent<HTMLInputElement, Event>,
    ) {
        const value = event.currentTarget.value.replace(/\D/g, "")
        const nextValues = [...values]

        nextValues[index] = value[0] ?? ""
        commitValues(nextValues)

        if (value && index < length - 1) {
            focusInput(index + 1)
        }
    }

    function handleKeyDown(
        index: number,
        event: JSX.TargetedKeyboardEvent<HTMLInputElement>,
    ) {
        if (event.key !== "Backspace") {
            return
        }

        event.preventDefault()

        const nextValues = [...values]

        if (nextValues[index]) {
            nextValues[index] = ""
            commitValues(nextValues)
            return
        }

        if (index > 0) {
            nextValues[index - 1] = ""
            commitValues(nextValues)
            focusInput(index - 1)
        }
    }

    function handlePaste(event: JSX.TargetedClipboardEvent<HTMLInputElement>) {
        event.preventDefault()

        const clipboardData = event.clipboardData

        if (!clipboardData) {
            return
        }

        const pastedCode = clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, length)

        if (!pastedCode) {
            return
        }

        const nextValues = Array.from({ length }, (_, index) => {
            return pastedCode[index] ?? ""
        })

        commitValues(nextValues)

        const nextFocusIndex = Math.min(pastedCode.length, length - 1)
        focusInput(nextFocusIndex)
    }

    function setInputRef(index: number, element: HTMLInputElement | null) {
        inputRefs.current[index] = element
    }

    function reset() {
        const nextValues = Array.from({ length }, () => "")
        commitValues(nextValues)
        focusInput(0)
    }

    return {
        values,
        handleInput,
        handleKeyDown,
        handlePaste,
        setInputRef,
        reset,
    }
}
