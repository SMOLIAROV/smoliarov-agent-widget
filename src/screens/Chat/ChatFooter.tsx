import { Button } from "@/shared/components/Button/Button"
import { ArrowUp } from "lucide-preact"
import { useChatComposer } from "./hooks/useChatComposer"
import type { ChatFooterProps } from "./types"
import { MAX_MESSAGE_LENGTH } from "./constants"
import { ErrorBanner } from "@/shared/components/ErrorBanner/ErrorBanner"
import { useDict } from "@/i18n/hooks/useDict"

export function ChatFooter({ onSend }: ChatFooterProps) {
    const dict = useDict()
    const {
        message,
        messageLength,
        canSend,
        isSending,
        error,
        handleInput,
        handleSend,
    } = useChatComposer({ onSend })

    return (
        <div className="border-chat-border flex flex-col gap-2 border-t p-3">
            {error && <ErrorBanner message={error} />}
            <form
                onSubmit={handleSend}
                className="border-chat-border bg-chat-surface focus-within:border-chat-accent/70 flex items-center gap-2 rounded-xl border p-1.5 pl-3"
            >
                <input
                    type={"text"}
                    value={message}
                    onInput={handleInput}
                    maxLength={MAX_MESSAGE_LENGTH}
                    placeholder={dict.chat.input.placeholder}
                    className="text-chat-foreground placeholder:text-chat-muted min-w-0 flex-1 bg-transparent py-2 text-base outline-none sm:text-xs"
                />
                <Button
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
