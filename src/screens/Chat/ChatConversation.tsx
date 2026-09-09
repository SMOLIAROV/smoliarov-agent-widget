import { Message } from "./components/Message"

export function ChatConversation() {
    return (
        <div className="chat-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5">
            <Message />
        </div>
    )
}
