import type { ButtonProps } from "./types"
import { useButtonLoading } from "./useButtonLoading"
import { LoaderCircle } from "lucide-preact"
import { useDict } from "@/i18n/hooks/useDict"

export function Button({
    children,
    onClick,
    disabled = false,
    loading = false,
    ariaLabel,
    ariaExpanded,
    ariaControls,
    ref,
    className,
    type = "button",
}: ButtonProps) {
    const dict = useDict()
    const { isLoading, handleClick } = useButtonLoading(onClick)
    const isBusy = loading || isLoading

    return (
        <button
            ref={ref}
            onClick={handleClick}
            disabled={disabled || isBusy}
            aria-busy={isBusy}
            aria-label={isBusy ? dict.common.loading : ariaLabel}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
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
