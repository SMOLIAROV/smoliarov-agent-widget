export function WidgetPanel(){
    return (
        <section
            className="
                flex
                h-[var(--mobile-widget-height)]
                w-[calc(100vw-24px)]
                min-h-0
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-chat-border
                bg-chat-panel
                shadow-2xl
                shadow-black/50

                sm:h-[min(680px,calc(100dvh-112px))]
                sm:w-[min(390px,calc(100vw-40px))]
                sm:rounded-2xl

                md:h-[min(700px,calc(100dvh-112px))]
                md:w-[420px]

                lg:w-[440px]
            "
        >
            
        </section>
    )
}