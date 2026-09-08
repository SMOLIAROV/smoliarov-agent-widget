import { createContext } from "preact"
import type { FlowContextType } from "./types"

export const FlowContext = createContext<FlowContextType | null>(null)
