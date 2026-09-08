import type { FlowScreen } from "../../flow/constants"

export interface StartActionsProps {
    navigate: (screen: FlowScreen) => void
}
