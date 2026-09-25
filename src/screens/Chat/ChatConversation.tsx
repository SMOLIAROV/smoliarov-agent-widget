import type { MessageData } from "./components/types"
import { MessageList } from "./components/MessageList"
import { useDict } from "@/i18n/hooks/useDict"
import type { ChatConversationProps } from "./types"

export function ChatConversation({
    messages,
    isTyping,
}: ChatConversationProps) {
    const dict = useDict()
    const greeting: MessageData = {
        id: "greeting",
        role: "assistant",
        content: dict.chat.messages.assistantGreeting,
    }

    return (
        <MessageList messages={[greeting, ...messages]} isTyping={isTyping} />
    )
}
