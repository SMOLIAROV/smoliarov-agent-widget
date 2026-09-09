import { Bot, X } from "lucide-preact"
import type { WidgetHeaderProps } from "./types"
import { useWidget } from "./hooks/useWidget"
import { Button } from "@/shared/components/Button/Button"
import { useDict } from "@/i18n/hooks/useDict"

export function WidgetHeader({ children }: WidgetHeaderProps) {
    const dict = useDict()
    const { close } = useWidget()

    return (
        <header className="border-chat-border flex items-center justify-between border-b p-5">
            <div className="flex items-center gap-3">
                {children ?? (
                    <>
                        <div className="border-chat-border bg-chat-surface relative flex size-9 items-center justify-center rounded-full border">
                            <Bot
                                className="text-chat-accent size-4"
                                aria-hidden="true"
                            />
                            <span className="bg-chat-accent absolute -top-0.5 -right-0.5 size-2 rounded-full" />
                        </div>

                        <div>
                            <p className="text-chat-foreground text-sm font-medium">
                                {dict.header.title}
                            </p>
                            <p className="text-chat-muted font-mono text-[10px] tracking-[0.16em] uppercase">
                                {dict.header.status}
                            </p>
                        </div>
                    </>
                )}
            </div>

            <Button
                onClick={close}
                className="text-chat-muted cursor-pointer rounded-md p-2"
            >
                <X />
            </Button>
        </header>
    )
}
