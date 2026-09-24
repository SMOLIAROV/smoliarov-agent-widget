import { client } from "../client"
import { sendMessage as sendMessageRequest } from "../endpoints/sendMessage"
import { getSessionToken } from "../session"

export function sendMessage(
    conversationId: string,
    message: string,
) {
    const token = getSessionToken()

    if (!token) {
        throw new Error("Session is not initialized")
    }

    return sendMessageRequest(
        client,
        token,
        conversationId,
        message,
    )
}