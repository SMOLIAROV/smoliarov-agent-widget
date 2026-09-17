import { useCallback, useState } from "preact/hooks"
import type { AsyncClickHandler } from "./types"
import type { JSX } from "preact/jsx-runtime"

export function useButtonLoading(onClick?: AsyncClickHandler) {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = useCallback(
        async (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
            if (!onClick || isLoading) return

            try {
                setIsLoading(true)
                await onClick(event)
            } finally {
                setIsLoading(false)
            }
        },
        [onClick, isLoading],
    )

    return {
        isLoading,
        handleClick,
    }
}
