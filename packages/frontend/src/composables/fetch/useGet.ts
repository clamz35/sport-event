export const useFetch = async (
  url: string,
  fetchOptions: RequestInit | undefined
): Promise<Response> => {
  return useFetch(url, {
    method: 'GET',
    ...fetchOptions,
  });
};
