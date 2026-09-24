import type { ComponentChildren, JSX } from "preact"

export interface ButtonProps {
    children: ComponentChildren
    onClick?: (
        e: JSX.TargetedMouseEvent<HTMLButtonElement>,
    ) => void | Promise<void>
    disabled?: boolean
    loading?: boolean
    ariaLabel?: string
    ariaExpanded?: boolean
    ariaControls?: string
    className?: string
    type?: "button" | "submit" | "reset"
}

export type AsyncClickHandler = (
    event: JSX.TargetedMouseEvent<HTMLButtonElement>,
) => void | Promise<void>
