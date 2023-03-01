import { useQuery } from '@tanstack/react-query';

import { gotService } from '../api';

export const useFilteredData = (page: number, pageSize: number, filter: string) => {
  const { isLoading, data, isSuccess } = useQuery(
    ['main data', page, filter],
    () => gotService.getFiltredData(page, pageSize, filter),
    {
      enabled: !!filter,
      onError: (error: Error) => {
        console.log(error.message);
      },
    },
  );

  return { isLoading, data, isSuccess };
};
