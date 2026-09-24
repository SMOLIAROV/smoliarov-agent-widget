import { useEffect, useRef, useState } from "preact/hooks"
import { FLOW_SCREEN, type FlowScreen } from "./constants"
import { SCREEN_REGISTRY } from "./screenRegistry"
import { FlowContext } from "./context"
import { validateSession } from "@/api/services/auth"

export function Flow() {
    const [screen, setScreen] = useState<FlowScreen | null>(null)
    const isInitializing = useRef(false)

    function navigate(nextScreen: FlowScreen) {
        setScreen(nextScreen)
    }

    useEffect(() => {
        if (isInitializing.current) {
            return
        }

        isInitializing.current = true

        async function restoreSession() {
            const isValid = await validateSession()

            setScreen(isValid ? FLOW_SCREEN.CHAT : FLOW_SCREEN.START)
        }

        void restoreSession()
    }, [])

    if (!screen) {
        return null
    }

    const Screen = SCREEN_REGISTRY[screen]

    return (
        <FlowContext.Provider value={{ screen, navigate }}>
            <Screen />
        </FlowContext.Provider>
    )
}
