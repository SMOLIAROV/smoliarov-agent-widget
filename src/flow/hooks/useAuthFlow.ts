import { FLOW_SCREEN } from "../constants"
import { useFlow } from "./useFlow"

export function useAuthFlow() {
    const { navigate } = useFlow()

    function openStart() {
        navigate(FLOW_SCREEN.START)
    }

    function openChat() {
        navigate(FLOW_SCREEN.CHAT)
    }

    return {
        openStart,
        openChat,
    }
}
