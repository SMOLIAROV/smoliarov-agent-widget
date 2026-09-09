export const FLOW_SCREEN = {
    START: "start",
    AUTH: "auth",
    CHAT: "chat",
} as const

export type FlowScreen = (typeof FLOW_SCREEN)[keyof typeof FLOW_SCREEN]
