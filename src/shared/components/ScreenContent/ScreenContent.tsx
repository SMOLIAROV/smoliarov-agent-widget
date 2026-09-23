import type { ScreenContentProps } from "./types"

export function ScreenContent({ children }: ScreenContentProps) {
    return (
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 overflow-y-auto px-5 py-8 sm:px-8">
            {children}
        </div>
    )
}
