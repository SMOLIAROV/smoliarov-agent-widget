import type { JSX } from "preact"

export interface PoliciesCheckboxProps {
    isChecked: boolean
    onChange: (_event: JSX.TargetedEvent<HTMLInputElement, Event>) => void
}
