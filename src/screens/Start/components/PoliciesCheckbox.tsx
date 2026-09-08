import { Check } from "lucide-preact"
import type { PoliciesCheckboxProps } from "./types"

export function PoliciesCheckbox({
    isChecked,
    onChange,
}: PoliciesCheckboxProps) {
    return (
        <label className="text-chat-muted flex cursor-pointer items-start gap-3 text-xs leading-5 select-none">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className="sr-only"
            />

            <span
                className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    isChecked
                        ? "border-chat-accent bg-chat-accent text-chat-accent-foreground"
                        : "border-chat-border bg-chat-surface"
                } `}
            >
                <Check
                    aria-hidden="true"
                    className={`size-3 transition-opacity ${isChecked ? "opacity-100" : "opacity-0"} `}
                />
            </span>

            <span className="whitespace-normal">
                Я принимаю{" "}
                <a
                    href="#privacy"
                    className="text-chat-foreground underline underline-offset-2"
                >
                    Политику конфиденциальности
                </a>{" "}
                и{" "}
                <a
                    href="#terms"
                    className="text-chat-foreground underline underline-offset-2"
                >
                    Пользовательское соглашение
                </a>
            </span>
        </label>
    )
}
