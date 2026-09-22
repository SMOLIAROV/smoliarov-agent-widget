import { useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"
import type { UseChatComposerOptions } from "../types"
import { MAX_MESSAGE_LENGTH } from "../constants"
import { useErrorMessages } from "@/shared/hooks/useErrorMessages"

export function useChatComposer({ onSend }: UseChatComposerOptions) {
    const [message, setMessage] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const errors = useErrorMessages()

    function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
        setMessage(event.currentTarget.value.slice(0, MAX_MESSAGE_LENGTH))
        setError(null)
    }

    async function handleSend(
        event:
            | JSX.TargetedMouseEvent<HTMLButtonElement>
            | JSX.TargetedSubmitEvent<HTMLFormElement>,
    ) {
        event.preventDefault()

        const trimmedMessage = message.trim()

        if (!trimmedMessage || trimmedMessage.length > MAX_MESSAGE_LENGTH) {
            return
        }

        try {
            setIsSending(true)
            setError(null)

            await onSend?.(trimmedMessage)

            setMessage("")
        } catch {
            setError(errors.sendMessageFailed)
        } finally {
            setIsSending(false)
        }
    }

    return {
        message,
        messageLength: message.length,
        canSend: Boolean(message.trim()),
        isSending,
        error,
        handleInput,
        handleSend,
    }
}
