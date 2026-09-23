import type { ComponentChildren, RefObject } from "preact"

export interface WidgetButtonProps {
    isOpen: boolean
    onClick: () => void
    triggerRef?: RefObject<HTMLButtonElement>
}

export interface WidgetHeaderProps {
    children?: ComponentChildren
}

export interface WidgetContextType {
    close: () => void
}

export interface WidgetProviderProps {
    children: ComponentChildren
    close: () => void
}
