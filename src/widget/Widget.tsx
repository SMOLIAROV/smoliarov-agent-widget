import { useState } from "preact/hooks"
import { WidgetPanel } from "./WidgetPanel"
import { WidgetButton } from "./WidgetButton"
import { WidgetProvider } from "./WidgetProvider"

export function Widget() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <WidgetProvider close={() => setIsOpen(false)}>
            <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-3 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:items-end sm:pb-0 md:right-7 md:bottom-7">
                {isOpen && <WidgetPanel />}

                <div className="mr-3 self-end sm:mr-0">
                    <WidgetButton
                        isOpen={isOpen}
                        onClick={() => setIsOpen((value) => !value)}
                    />
                </div>
            </div>
        </WidgetProvider>
    )
}
