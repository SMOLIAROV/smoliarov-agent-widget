import type { HttpClient } from "../types"

type ValidateSessionResponse = {
    valid: boolean
}

export function validateSession(
    client: HttpClient,
    token: string,
) {
    return client.post<ValidateSessionResponse>(
        "/auth/validate",
        {},
        token,
    )
}