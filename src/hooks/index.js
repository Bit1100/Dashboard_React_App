import { useQuery } from "react-query";

export const useCustomQuery = ({ queryKey, fetcherFn, options = {} }) => {
  return useQuery(queryKey, fetcherFn, {
    cacheTime: 10 * 60 * 1000,
    staleTime: 60 * 1000,
    select: (data) => data?.data,
    ...options,
  });
};
