import type { MessageProps } from "./types"

export function Message({ message }: MessageProps) {
    const isUser = message.role === "user"

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[86%] rounded-xl px-3.5 py-3 text-[13px] leading-5 ${
                    isUser
                        ? "bg-chat-user text-chat-user-foreground"
                        : "border-chat-border bg-chat-surface text-chat-foreground border"
                }`}
            >
                {message.content}
            </div>
        </div>
    )
}
