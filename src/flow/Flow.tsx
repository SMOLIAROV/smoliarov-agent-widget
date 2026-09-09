import { useState } from "preact/hooks"
import { FLOW_SCREEN, type FlowScreen } from "./constants"
import { SCREEN_REGISTRY } from "./screenRegistry"
import { FlowContext } from "./context"

export function Flow() {
    const [screen, setScreen] = useState<FlowScreen>(FLOW_SCREEN.START)

    function navigate(nextScreen: FlowScreen) {
        setScreen(nextScreen)
    }

    const Screen = SCREEN_REGISTRY[screen]

    return (
        <FlowContext.Provider value={{ screen, navigate }}>
            <Screen />
        </FlowContext.Provider>
    )
}
