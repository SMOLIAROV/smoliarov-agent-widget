import { Button } from "@/shared/components/Button/Button"
import { ArrowUp } from "lucide-preact"

export function ChatFooter() {
    return (
        <div className="border-chat-border border-t p-3">
            <div className="border-chat-border bg-chat-surface focus-within:border-chat-accent/70 flex items-center gap-2 rounded-xl border p-1.5 pl-3">
                <input
                    placeholder="Write a message..."
                    className="text-chat-foreground placeholder:text-chat-muted min-w-0 flex-1 bg-transparent py-2 text-base outline-none sm:text-xs"
                />
                <Button className="bg-chat-accent text-chat-accent-foreground flex size-8 shrink-0 items-center justify-center rounded-lg transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-30">
                    <ArrowUp className="size-4" />
                </Button>
            </div>
        </div>
    )
}
