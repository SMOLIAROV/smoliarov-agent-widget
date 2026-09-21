export function TypingIndicator() {
    return (
        <div className="flex justify-start" role="status" aria-label="Loading">
            <div className="border-chat-border bg-chat-surface text-chat-muted flex items-center gap-2 rounded-xl border px-3.5 py-3 font-mono text-[10px] tracking-[0.14em] uppercase">
                <span className="flex gap-0.5" aria-hidden="true">
                    <i className="bg-chat-accent size-1 animate-pulse rounded-full" />
                    <i className="bg-chat-accent size-1 animate-pulse rounded-full [animation-delay:150ms]" />
                    <i className="bg-chat-accent size-1 animate-pulse rounded-full [animation-delay:300ms]" />
                </span>
            </div>
        </div>
    )
}
