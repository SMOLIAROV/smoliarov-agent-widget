import { Button } from "@/shared/components/Button/Button"
import { ArrowUp } from "lucide-preact"
import { useChatComposer } from "./hooks/useChatComposer"
import type { ChatFooterProps } from "./types"
import { MAX_MESSAGE_LENGTH } from "./constants"

export function ChatFooter({ onSend }: ChatFooterProps) {
    const {
        message,
        messageLength,
        canSend,
        isSending,
        handleInput,
        handleSend,
    } = useChatComposer({ onSend })

    return (
        <div className="border-chat-border border-t p-3">
            <form
                onSubmit={handleSend}
                className="border-chat-border bg-chat-surface focus-within:border-chat-accent/70 flex items-center gap-2 rounded-xl border p-1.5 pl-3"
            >
                <input
                    type={"text"}
                    value={message}
                    onInput={handleInput}
                    maxLength={MAX_MESSAGE_LENGTH}
                    placeholder="Write a message..."
                    className="text-chat-foreground placeholder:text-chat-muted min-w-0 flex-1 bg-transparent py-2 text-base outline-none sm:text-xs"
                />
                <Button
                    onClick={handleSend}
                    disabled={!canSend}
                    loading={isSending}
                    type={"submit"}
                    className="bg-chat-accent text-chat-accent-foreground flex size-8 shrink-0 items-center justify-center rounded-lg transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-30"
                >
                    <ArrowUp className="size-4" />
                </Button>
            </form>
            <div className="flex justify-end px-1 pt-1.5">
                <span className="text-chat-muted text-[11px] tabular-nums">
                    {messageLength}/{MAX_MESSAGE_LENGTH}
                </span>
            </div>
        </div>
    )
}
