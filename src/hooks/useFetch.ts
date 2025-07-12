'use client';

import useSWR, { SWRConfiguration } from 'swr';
import { apiClient } from '@/utils/apiClient';

export function useFetch<T = any>(
  url: string | null,
  options?: SWRConfiguration
) {
  const { data, error, isLoading, mutate } = useSWR<T>(
    url,
    () => apiClient.get(url!),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      ...options,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export function useAuthFetch<T = any>(
  url: string | null,
  options?: SWRConfiguration
) {
  const { data, error, isLoading, mutate } = useSWR<T>(
    url,
    () => apiClient.get(url!),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      ...options,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
