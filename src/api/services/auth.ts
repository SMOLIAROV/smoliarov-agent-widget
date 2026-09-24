import { authenticateAnonymous as authenticateAnonymousRequest } from "../endpoints/authenticateAnonymous"
import { validateSession as validateSessionRequest } from "../endpoints/validateSession"
import { client } from "../client"
import { clearSessionToken, getSessionToken, saveSessionToken } from "../session"

export async function authenticateAnonymous() {
    const response = await authenticateAnonymousRequest(client)

    saveSessionToken(response.session_token)

    return response
}

export async function validateSession() {
    const token = getSessionToken()

    if (!token) {
        return false
    }

    try {
        const response = await validateSessionRequest(client, token)

        if (!response.valid) {
            clearSessionToken()
        }

        return response.valid
    } catch {
        clearSessionToken()
        return false
    }
}