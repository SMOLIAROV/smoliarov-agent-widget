export type MessageRole = "user" | "assistant"

export interface MessageData {
    id: string
    role: MessageRole
    content: string
}

export interface MessageProps {
    message: MessageData
}

export interface MessageListProps {
    messages: MessageData[]
    isTyping?: boolean
}
