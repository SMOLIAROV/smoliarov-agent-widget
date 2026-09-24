import { useFlow } from "./useFlow"
import { FLOW_SCREEN } from "../constants"
import { authenticateAnonymous } from "../../api/services/auth"

export function useStartFlow() {
    const { navigate } = useFlow()

    function openLogin() {
        navigate(FLOW_SCREEN.AUTH)
    }

    async function continueAnonymously() {
        await authenticateAnonymous()
        navigate(FLOW_SCREEN.CHAT)
    }

    return {
        openLogin,
        continueAnonymously,
    }
}
