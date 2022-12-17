import { useFetch } from './useFetch';

export const usePost = async (
  url: string,
  body: string,
  fetchOptions?: RequestInit | undefined
): Promise<Response> => {
  return useFetch(url, {
    method: 'POST',
    body,
    ...fetchOptions,
  });
};
