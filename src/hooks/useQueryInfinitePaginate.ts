import {useState, useEffect} from "react";
import { useInfiniteQuery } from 'react-query';
import Connector from '../lib/connector.js';

const connector = new Connector();

type TInitialData = any;
type TItem = string;

interface IState {
   isLoading: boolean;
   isFetching: any;
   isFetchingMore: any;
   fetchMore: any;
   canFetchMore: any;
   status: any;
   error: any;
   data: TInitialData;
   isError: boolean;
   setPage: any; 
}

const useQueryPaginate = (
  item: TItem,
  options?: any,
  key?: string,
): IState => {

    const [page,setPage] = useState(1); 

    const { isLoading, isError, status, data, error, isFetching, isFetchingMore,  fetchMore,  canFetchMore } = useInfiniteQuery(
        [key || item, options],
        async (key, options: any = {}) => {
            options = {
                ...options,
                urlOptions: {
                    ...options?.urlOptions,
                    params: {
                        ...options?.urlOptions?.params,
                         pageNumber: page
                    }
                }
            }; 
            return connector.request(item, 'json', options); 
          },
          {
            getFetchMore: lastGroup => lastGroup.next,
            retry: 0,
            refetchOnWindowFocus: false,
          },
    );


    useEffect(() => {
        if(page > 1 && canFetchMore) fetchMore(); 
    }, [page,fetchMore])

  return {
    isLoading, isError, status, data, error, isFetching, isFetchingMore,  fetchMore,  canFetchMore, setPage 
  };
};

export default useQueryPaginate;
