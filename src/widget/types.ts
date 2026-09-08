import type { ComponentChildren } from "preact"

export interface WidgetButtonProps {
    isOpen: boolean
    onClick: () => void
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
