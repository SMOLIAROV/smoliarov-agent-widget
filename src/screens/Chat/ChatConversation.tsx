import type { MessageData } from "./components/types"
import { MessageList } from "./components/MessageList"

const messages: MessageData[] = [
    {
        id: "1",
        role: "assistant",
        content: "Hello, how can I help you?",
    },
    {
        id: "2",
        role: "user",
        content: "I need help.",
    },
]

export function ChatConversation() {
    return <MessageList messages={messages} isTyping={true} />
}
