import { useQuery } from '@tanstack/react-query';
import { dispatch } from '../../store';
import { fillCardData } from '../../store/slices/dataCard';
import { CardInfo } from '../../types/cardType';

import { gotService } from '../api';

export const useFilteredData = (page: number, pageSize: number, filter: string) => {
  const { isLoading, data, isSuccess } = useQuery(
    ['main data', page, filter],
    () => gotService.getFiltredData(page, pageSize, filter),
    {
      enabled: !!filter,
      onSuccess(data: CardInfo[]) {
        dispatch(fillCardData(data));
      },
      onError: (error: Error) => {
        console.log(error.message);
      },
    },
  );

  return { isLoading, data, isSuccess };
};
