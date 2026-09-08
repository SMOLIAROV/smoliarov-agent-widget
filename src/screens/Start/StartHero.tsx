import { Sparkles } from "lucide-preact"

export function StartHero() {
    return (
        <div className="flex flex-col gap-4">
            <div className="border-chat-border bg-chat-surface flex size-12 items-center justify-center rounded-full border">
                <Sparkles
                    className="text-chat-accent size-5"
                    aria-hidden="true"
                />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-chat-muted font-mono text-[10px] tracking-[0.18em] uppercase">
                    Перед началом
                </p>

                <h2 className="text-chat-foreground text-2xl font-medium tracking-tight text-balance">
                    Чем могу помочь?
                </h2>

                <p className="text-chat-muted max-w-sm text-sm leading-6">
                    Войдите, чтобы сохранять историю и получать доступ к чатам с
                    любого устройства. Можно продолжить анонимно.
                </p>
            </div>
        </div>
    )
}
