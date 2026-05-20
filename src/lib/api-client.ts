type FetchOptions = RequestInit & {
};

export class ApiError extends Error {
  constructor(public status: number, public data: any, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const url = `${BASE_URL}${normalizedEndpoint}`;

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers: defaultHeaders,
  });

  if (!response.ok) {
    let errorData = {};
    try {
      errorData = await response.json();
    } catch {
    }

    throw new ApiError(
      response.status,
      errorData,
      response.statusText || 'An unexpected error occurred'
    );
  }

  if (response.status === 204) {
    return {} as T;
  }

  const json = await response.json();
  return json.data ?? json;
}