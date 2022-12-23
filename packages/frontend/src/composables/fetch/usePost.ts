import type { z } from 'zod';
import { useFetch } from './useFetch';

export const usePost = async <ResponseSchemaType>(
  url: string,
  body: string,
  responseSchema: z.ZodType<ResponseSchemaType>,
  fetchOptions?: RequestInit | undefined,
): Promise<ResponseSchemaType> => {
  return useFetch<ResponseSchemaType>(url, responseSchema, {
    method: 'POST',
    body,
    ...fetchOptions,
  });
};
