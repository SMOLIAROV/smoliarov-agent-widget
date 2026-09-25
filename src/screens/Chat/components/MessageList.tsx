import { useEffect, useRef } from "preact/hooks"
import { Message } from "./Message"
import type { MessageListProps } from "./types"
import { TypingIndicator } from "./TypingIndicator"

export function MessageList({ messages, isTyping = false }: MessageListProps) {
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const list = listRef.current

        if (!list) {
            return
        }

        list.scrollTo({
            top: list.scrollHeight,
            behavior: "smooth",
        })
    }, [messages, isTyping])

    return (
        <div
            ref={listRef}
            className="chat-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5"
        >
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

            {isTyping && <TypingIndicator />}
        </div>
    )
}
