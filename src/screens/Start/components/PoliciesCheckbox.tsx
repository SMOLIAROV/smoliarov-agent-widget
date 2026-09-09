import { Check } from "lucide-preact"
import type { PoliciesCheckboxProps } from "./types"
import { useDict } from "@/i18n/useDict"

export function PoliciesCheckbox({
    isChecked,
    onChange,
}: PoliciesCheckboxProps) {
    const dict = useDict()

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
                {dict.start.policies.prefix}{" "}
                <a
                    href="#privacy"
                    className="text-chat-foreground underline underline-offset-2"
                >
                    {dict.start.policies.privacy}
                </a>{" "}
                {dict.start.policies.conjunction}{" "}
                <a
                    href="#terms"
                    className="text-chat-foreground underline underline-offset-2"
                >
                    {dict.start.policies.terms}
                </a>
            </span>
        </label>
    )
}
