import { X } from "lucide-preact"
import type { ComponentChildren } from "preact"

export function WidgetHeader({ children }: { children: ComponentChildren }) {
  return (
    <header className="border-chat-border flex items-center justify-between border-b p-5">
      <div className="flex items-center gap-3">{children}</div>

      <button className="text-chat-muted cursor-pointer rounded-md p-2">
        <X />
      </button>
    </header>
  )
}
