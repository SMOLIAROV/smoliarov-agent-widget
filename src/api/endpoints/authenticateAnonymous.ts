import type { HttpClient } from "../types"

export type AuthResponse = {
    session_token: string
}

export function authenticateAnonymous(client: HttpClient) {
    return client.post<AuthResponse>("/auth", {
        email: null,
    })
}
