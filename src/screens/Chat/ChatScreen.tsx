import { WidgetHeader } from "@/widget/WidgetHeader"
import { ChatFooter } from "./ChatFooter"
import { ChatConversation } from "./ChatConversation"
import { useChat } from "./hooks/useChat"

export function ChatScreen() {
    const { messages, isTyping, handleSend } = useChat()

    return (
        <>
            <WidgetHeader />

            <div className="flex min-h-0 flex-1 flex-col">
                <ChatConversation messages={messages} isTyping={isTyping} />
                <ChatFooter onSend={handleSend} />
            </div>
        </>
    )
}
