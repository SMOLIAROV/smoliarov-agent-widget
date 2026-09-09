import { WidgetHeader } from "@/widget/WidgetHeader"
import { ChatFooter } from "./ChatFooter"
import { ChatConversation } from "./ChatConversation"

export function ChatScreen() {
    return (
        <>
            <WidgetHeader />

            <div className="flex min-h-0 flex-1 flex-col">
                <ChatConversation />
                <ChatFooter />
            </div>
        </>
    )
}
