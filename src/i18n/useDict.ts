import { getDictionary } from "."
import type { Dictionary } from "./types"

export function useDict(): Dictionary {
    return getDictionary()
}
