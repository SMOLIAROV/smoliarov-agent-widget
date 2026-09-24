import type { HttpClient } from "../types"

export type ChatResponse = {
    message: string
}

export function sendMessage(
    client: HttpClient,
    token: string,
    conversationId: string,
    message: string,
) {
    return client.post<ChatResponse>(
        "/chat",
        {
            conversation_id: conversationId,
            message,
        },
        token,
    )
}