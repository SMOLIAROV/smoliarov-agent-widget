import { Message } from "./Message"
import type { MessageListProps } from "./types"
import { TypingIndicator } from "./TypingIndicator"

export function MessageList({ messages, isTyping = false }: MessageListProps) {
    return (
        <div className="chat-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

            {isTyping && <TypingIndicator />}
        </div>
    )
}
