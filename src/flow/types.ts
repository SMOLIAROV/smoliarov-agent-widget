import type { FlowScreen } from "./constants"

export interface FlowContextType {
    screen: FlowScreen
    navigate: (screen: FlowScreen) => void
}
