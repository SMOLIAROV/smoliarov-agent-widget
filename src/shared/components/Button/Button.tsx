import type { ButtonProps } from "./types"

export function Button({
    children,
    onClick,
    disabled = false,
    className,
    type = "button",
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={className}
            type={type}
        >
            {children}
        </button>
    )
}
