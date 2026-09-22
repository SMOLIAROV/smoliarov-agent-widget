import { AlertCircle } from "lucide-preact"
import type { ErrorBannerProps } from "./types"

export function ErrorBanner({ message }: ErrorBannerProps) {
    return (
        <div
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2.5 text-sm text-red-200"
        >
            <AlertCircle
                className="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
            />
            <p>{message}</p>
        </div>
    )
}
