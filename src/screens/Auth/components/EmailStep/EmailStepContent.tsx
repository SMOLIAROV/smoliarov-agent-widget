import { useDict } from "@/i18n/hooks/useDict"

export function EmailStepContent() {
    const dict = useDict()

    return (
        <div className="flex flex-col gap-2">
            <p className="text-chat-muted font-mono text-[10px] tracking-[0.18em] uppercase">
                {dict.auth.emailStep.label}
            </p>

            <h2 className="text-chat-foreground text-2xl font-medium tracking-tight">
                {dict.auth.emailStep.title}
            </h2>

            <p className="text-chat-muted text-sm leading-6">
                {dict.auth.emailStep.description}
            </p>
        </div>
    )
}
