import { MessageCircle, X } from "lucide-preact";
import type { WidgetButtonProps } from "./types";


export function WidgetButton({isOpen, onClick}: WidgetButtonProps){
    return (
        <>
            <button
                onClick={onClick}
                className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-chat-border
                    bg-chat-panel
                    p-4
                    text-chat-foreground
                    shadow-[0_0_15px_rgba(0,0,0,0.3)]
                    shadow-black
                    cursor-pointer
                    transition-all
                    hover:border-chat-accent/60
                    hover:bg-chat-surface
                "
            >
                <span
                    className="
                        relative 
                        flex 
                        size-8
                        items-center 
                        justify-center 
                    "
                >
                    {
                        isOpen ? 
                        (
                            <X className="size-5" />
                        ): (
                            <MessageCircle className="size-5" />
                        )
                    }
                </span>
            </button>
        </>
    )
}