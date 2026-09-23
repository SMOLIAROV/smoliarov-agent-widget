import { useEffect, useRef } from "preact/hooks"
import { FOCUSABLE_SELECTOR } from "./constants"

export function useFocusTrap(enabled: boolean) {
    const containerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!enabled) {
            return
        }

        const currentContainer = containerRef.current

        if (!currentContainer) {
            return
        }

        const container: HTMLElement = currentContainer

        container.focus()

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key !== "Tab") {
                return
            }

            const focusableElements =
                container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)

            if (!focusableElements.length) {
                event.preventDefault()
                container.focus()
                return
            }

            const firstElement = focusableElements[0]
            const lastElement = focusableElements[focusableElements.length - 1]

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault()
                lastElement.focus()
            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {
                event.preventDefault()
                firstElement.focus()
            }
        }

        container.addEventListener("keydown", handleKeyDown)

        return () => {
            container.removeEventListener("keydown", handleKeyDown)
        }
    }, [enabled])

    return containerRef
}
