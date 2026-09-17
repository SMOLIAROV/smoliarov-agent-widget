import type { ComponentChildren, JSX } from "preact"

export interface ButtonProps {
    children: ComponentChildren
    onClick?: (
        e: JSX.TargetedMouseEvent<HTMLButtonElement>,
    ) => void | Promise<void>
    disabled?: boolean
    className?: string
    type?: "button" | "submit" | "reset"
}

export type AsyncClickHandler = (
    event: JSX.TargetedMouseEvent<HTMLButtonElement>,
) => void | Promise<void>
