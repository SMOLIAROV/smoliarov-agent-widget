import type { ButtonProps } from "./types"
import { useButtonLoading } from "./useButtonLoading"
import { LoaderCircle } from "lucide-preact"

export function Button({
    children,
    onClick,
    disabled = false,
    loading = false,
    className,
    type = "button",
}: ButtonProps) {
    const { isLoading, handleClick } = useButtonLoading(onClick)
    const isBusy = loading || isLoading

    return (
        <button
            onClick={handleClick}
            disabled={disabled || isBusy}
            aria-busy={isBusy}
            aria-label={isBusy ? "Loading" : undefined}
            className={className}
            type={type}
        >
            {isBusy ? (
                <LoaderCircle
                    className="size-4 animate-spin"
                    aria-hidden="true"
                />
            ) : (
                children
            )}
        </button>
    )
}
