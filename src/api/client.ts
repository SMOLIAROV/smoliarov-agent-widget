import type { HttpClient } from "./types"

export function createClient(baseUrl: string): HttpClient {
    return {
        async post<T>(path: string, body: unknown, token?: string): Promise<T> {
            const headers = new Headers({
                "Content-Type": "application/json",
            })

            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }

            const response = await fetch(`${baseUrl}${path}`, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            })

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`)
            }

            return response.json() as Promise<T>
        },
    }
}

export const client = createClient(import.meta.env.VITE_API_URL)
