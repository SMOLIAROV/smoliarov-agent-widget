import { createContext } from "preact"
import type { WidgetContextType } from "./types"

export const WidgetContext = createContext<WidgetContextType | null>(null)
