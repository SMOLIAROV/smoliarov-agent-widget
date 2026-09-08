import type { ComponentChildren, JSX } from "preact"

export interface ButtonProps {
    children: ComponentChildren
    onClick?: JSX.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    className: string
    type?: "button" | "submit" | "reset"
}
