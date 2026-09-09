import { AuthScreen } from "@/screens/Auth/AuthScreen"
import { ChatScreen } from "@/screens/Chat/ChatScreen"
import { StartScreen } from "@/screens/Start/StartScreen"

export const FLOW_SCREEN = {
    START: "start",
    AUTH: "auth",
    CHAT: "chat",
} as const

export type FlowScreen = (typeof FLOW_SCREEN)[keyof typeof FLOW_SCREEN]

export const SCREEN_REGISTRY = {
    [FLOW_SCREEN.START]: StartScreen,
    [FLOW_SCREEN.AUTH]: AuthScreen,
    [FLOW_SCREEN.CHAT]: ChatScreen,
}
