import { z } from 'zod';

export const useFetch = async <ResponseSchemaType>(
  url: string,
  responseSchema: z.ZodType<ResponseSchemaType>,
  fetchOptions?: RequestInit | undefined,
): Promise<ResponseSchemaType> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const defaultFecthOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${baseUrl}${url}`, { ...defaultFecthOptions, ...fetchOptions });

  if (!response.ok) {
    throw await response.json();
  }

  return z.promise(responseSchema).parse(response.json());
};
