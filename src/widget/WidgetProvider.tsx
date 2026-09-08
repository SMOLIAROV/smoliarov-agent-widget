import { WidgetContext } from "./context"
import type { WidgetProviderProps } from "./types"

export function WidgetProvider({ children, close }: WidgetProviderProps) {
    return (
        <WidgetContext.Provider value={{ close }}>
            {children}
        </WidgetContext.Provider>
    )
}
