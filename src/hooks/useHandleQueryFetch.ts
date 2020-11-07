// import lib 
import { useMutation, queryCache } from "react-query";
import Connector from '../lib/connector.js';

const connector = new Connector();

const handleFetchFunction = async (params) => {
    const item = params.item;
    const format = params.format;
    const options = params.options;

    return connector.request(item, format, options);
}

interface IOptions {
    readonly isLoading: boolean;
    readonly error: Error | null | undefined;
    readonly data: any;
    readonly isError: boolean;
    readonly isSuccess: boolean;
}


const useQueryFetch = (item: string, format?: any) => {

    const [
        mutate,
        mutationOptions,
    ] = useMutation(handleFetchFunction, {


        onSuccess: (res, variables) => {
            const key = variables.key || item;
            const data = queryCache.getQueryData(key);
            if (!data) {
                queryCache.setQueryData(key, res);
            }
        },

    });


    let stateOptions = {
        ...mutationOptions
    };

    const handleFetch = async (options?: any, key?: any) => {
        const data = queryCache.getQueryData(item);

        if (!data) {
            // if there is not cache data for this item then run this piece of code 
            const params: any = { item, options, format, key };

            await mutate(params);

            return;

        }

        // @ts-ignore
        // stateOptions = {
        //     status: 'success',
        //     isLoading: false, isError: false, data: data, error: null, isSuccess: true, isIdle: false,
        // }

    }



    return [handleFetch, stateOptions]

}

export default useQueryFetch
