
interface RequestInit {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: BodyInit | null;
    responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData';
}

export const useFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
    return fetch(url, options) as Promise<T>
}