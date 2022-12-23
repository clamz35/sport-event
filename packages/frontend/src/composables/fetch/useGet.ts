import type { z } from 'zod';
import { useFetch } from './useFetch';

export const useGet = async <ResponseSchemaType>(
  url: string,
  responseSchema: z.ZodType<ResponseSchemaType>,
  fetchOptions?: RequestInit | undefined,
): Promise<ResponseSchemaType> => {
  return useFetch<ResponseSchemaType>(url, responseSchema, {
    method: 'GET',
    ...fetchOptions,
  });
};
