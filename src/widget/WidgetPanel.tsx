import { Flow } from "../flow/Flow"

export function WidgetPanel() {
    return (
        <section className="border-chat-border bg-chat-panel flex h-[var(--mobile-widget-height)] min-h-0 w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl border shadow-2xl shadow-black/50 sm:h-[min(680px,calc(100dvh-112px))] sm:w-[min(390px,calc(100vw-40px))] sm:rounded-2xl md:h-[min(700px,calc(100dvh-112px))] md:w-[420px] lg:w-[440px]">
            <Flow />
        </section>
    )
}
