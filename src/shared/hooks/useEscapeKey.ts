import { useEffect } from "preact/hooks"
import type { UseEscapeKeyOptions } from "./types"

export function useEscapeKey({ enabled, onEscape }: UseEscapeKeyOptions) {
    useEffect(() => {
        if (!enabled) {
            return
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onEscape()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [enabled, onEscape])
}
