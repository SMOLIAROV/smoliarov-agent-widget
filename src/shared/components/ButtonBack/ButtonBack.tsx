import { ArrowLeft } from "lucide-preact"
import { Button } from "../Button/Button"
import { useDict } from "@/i18n/hooks/useDict"
import type { ButtonBackProps } from "./types"

export function ButtonBack({ onBack }: ButtonBackProps) {
    const dict = useDict()

    return (
        <Button
            onClick={onBack}
            className="text-chat-muted hover:text-chat-foreground flex cursor-pointer items-center gap-2 self-start text-xs"
        >
            <ArrowLeft className="size-3.5" />
            {dict.common.back}
        </Button>
    )
}
