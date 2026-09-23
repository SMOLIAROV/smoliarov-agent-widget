import type { MessageData } from "./components/types"
import { MessageList } from "./components/MessageList"
import { useDict } from "@/i18n/hooks/useDict"

export function ChatConversation() {
    const dict = useDict()
    const messages: MessageData[] = [
        {
            id: "1",
            role: "assistant",
            content: dict.chat.messages.assistantGreeting,
        },
        {
            id: "2",
            role: "user",
            content: dict.chat.messages.userExample,
        },
    ]

    return <MessageList messages={messages} isTyping={true} />
}
