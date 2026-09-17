import type { ButtonProps } from "./types"
import { useButtonLoading } from "./useButtonLoading"

export function Button({
    children,
    onClick,
    disabled = false,
    className,
    type = "button",
}: ButtonProps) {
    const { isLoading, handleClick } = useButtonLoading(onClick)

    return (
        <button
            onClick={handleClick}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            className={className}
            type={type}
        >
            {isLoading ? "Loading ..." : children}
        </button>
    )
}
