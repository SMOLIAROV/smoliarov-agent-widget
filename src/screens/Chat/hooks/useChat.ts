import { useRef, useState } from "preact/hooks"
import { sendMessage } from "@/api/services/chat"
import type { MessageData } from "../components/types"

export function useChat() {
    const [messages, setMessages] = useState<MessageData[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const conversationId = useRef(crypto.randomUUID())

    async function handleSend(content: string) {
        setMessages((current) => [
            ...current,
            {
                id: crypto.randomUUID(),
                role: "user",
                content,
            },
        ])

        setIsTyping(true)

        try {
            const response = await sendMessage(conversationId.current, content)

            setMessages((current) => [
                ...current,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: response.message,
                },
            ])
        } finally {
            setIsTyping(false)
        }
    }

    return {
        messages,
        isTyping,
        handleSend,
    }
}
