/** Normalized error thrown by the API client for any non-2xx response or network failure. */
export class ApiError extends Error {
  readonly status: number;
  readonly data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }

  /** status 0 = request never reached the server (offline, DNS, timeout). */
  get isNetworkError() {
    return this.status === 0;
  }
}
