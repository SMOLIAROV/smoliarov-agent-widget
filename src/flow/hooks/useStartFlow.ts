import { useFlow } from "./useFlow"
import { FLOW_SCREEN } from "../constants"

export function useStartFlow() {
    const { navigate } = useFlow()

    function openLogin() {
        navigate(FLOW_SCREEN.AUTH)
    }

    function continueAnonymously() {
        navigate(FLOW_SCREEN.CHAT)
    }

    return {
        openLogin,
        continueAnonymously,
    }
}
