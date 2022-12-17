export const useFetch = async (
  url: string,
  fetchOptions?: RequestInit | undefined
): Promise<Response> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const defaultFecthOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${baseUrl}${url}`, { ...defaultFecthOptions, ...fetchOptions });
};
