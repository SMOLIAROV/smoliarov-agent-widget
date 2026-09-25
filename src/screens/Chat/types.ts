import type { MessageData } from "./components/types"

export interface ChatFooterProps {
    onSend?: (message: string) => void | Promise<void>
}

export interface UseChatComposerOptions {
    onSend?: (message: string) => void | Promise<void>
}

export interface ChatConversationProps {
    messages: MessageData[]
    isTyping?: boolean
}
