import { AuthScreen } from "@/screens/Auth/AuthScreen"
import { ChatScreen } from "@/screens/Chat/ChatScreen"
import { StartScreen } from "@/screens/Start/StartScreen"
import type { ComponentType } from "preact"

import { FLOW_SCREEN, type FlowScreen } from "./constants"

export const SCREEN_REGISTRY: Record<FlowScreen, ComponentType> = {
    [FLOW_SCREEN.START]: StartScreen,
    [FLOW_SCREEN.AUTH]: AuthScreen,
    [FLOW_SCREEN.CHAT]: ChatScreen,
}
