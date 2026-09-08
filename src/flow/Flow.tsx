import { useState } from "preact/hooks"
import { FLOW_SCREEN, SCREEN_REGISTRY, type FlowScreen } from "./constants"
import { FlowContext } from "./context"

export function Flow() {
    const [screen, setScreen] = useState<FlowScreen>(FLOW_SCREEN.START)

    function navigate(screen: FlowScreen) {
        setScreen(screen)
    }

    const Screen = SCREEN_REGISTRY[screen]

    return (
        <FlowContext.Provider value={{ screen, navigate }}>
            <Screen navigate={navigate} />
        </FlowContext.Provider>
    )
}
