import { useState } from "preact/hooks"
import type { JSX } from "preact/jsx-runtime"
import type { UseChatComposerOptions } from "../types"
import { MAX_MESSAGE_LENGTH } from "../constants"

export function useChatComposer({ onSend }: UseChatComposerOptions) {
    const [message, setMessage] = useState("")
    const [isSending, setIsSending] = useState(false)

    function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
        setMessage(event.currentTarget.value.slice(0, MAX_MESSAGE_LENGTH))
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
            await onSend?.(trimmedMessage)
            setMessage("")
        } finally {
            setIsSending(false)
        }
    }

    return {
        message,
        messageLength: message.length,
        canSend: Boolean(message.trim()),
        isSending,
        handleInput,
        handleSend,
    }
}
