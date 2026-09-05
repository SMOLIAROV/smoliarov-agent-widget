import { useState } from "preact/hooks";
import { WidgetPanel } from "./WidgetPanel";
import { WidgetButton } from "./WidgetButton";

export function Widget(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div
            className="
                fixed
                inset-x-0
                bottom-0
                z-50
                flex
                flex-col
                items-center
                gap-3
                pb-[env(safe-area-inset-bottom)]

                sm:inset-x-auto
                sm:right-5
                sm:bottom-5
                sm:items-end
                sm:gap-3
                sm:pb-0

                md:right-7
                md:bottom-7
            "
        >
            {isOpen && <WidgetPanel />}

            <WidgetButton
                isOpen={isOpen}
                onClick={() => setIsOpen((value) => !value)}
            />
        </div>
    )
}