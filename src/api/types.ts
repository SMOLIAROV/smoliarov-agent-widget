export interface HttpClient {
    post<T>(
        path: string,
        body: unknown,
        token?: string,
    ): Promise<T>
}