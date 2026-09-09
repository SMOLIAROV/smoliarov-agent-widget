import type { FlowScreen } from "@/flow/constants"

export interface ScreenProps {
    navigate: (screen: FlowScreen) => void
}
