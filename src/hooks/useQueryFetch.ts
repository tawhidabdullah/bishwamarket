// import lib
// @ts-nocheck
import { useQuery } from 'react-query';
import Connector from '../lib/connector.js';

const connector = new Connector();

const fetchFunction = async (item, options = {}) => {
  return connector.request(item, 'json', options);
};

type TInitialData = any;
type TItem = string;

interface IState {
  readonly isLoading: boolean;
  readonly error: object | null;
  readonly data: TInitialData;
  readonly isError: boolean;
  readonly isSuccess: boolean;
  readonly refetch: any;
}

const useQueryFetch = (
  item: TItem,
  options?: any,
  key?: string,
  anotherKey?: any
): IState => {
  const { isLoading, isError, data, error, isSuccess, refetch } = useQuery(
    [key || item, anotherKey],
    () => fetchFunction(item, options),
    {
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  return {
    isLoading,
    isError,
    data,
    error,
    isSuccess,
    refetch
  };
};

export default useQueryFetch;
