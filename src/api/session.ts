const SESSION_TOKEN_KEY = "chat-widget-session-token"

export function getSessionToken() {
    return localStorage.getItem(SESSION_TOKEN_KEY)
}

export function saveSessionToken(token: string) {
    localStorage.setItem(SESSION_TOKEN_KEY, token)
}

export function clearSessionToken() {
    localStorage.removeItem(SESSION_TOKEN_KEY)
}