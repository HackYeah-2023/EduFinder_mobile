import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '_store/index';
import { logout } from '_store/slices/auth';
import { getToken } from '_utils';
import { Alert } from 'react-native';

export const BASE_URL = 'http://10.250.160.204:3001/';

const endpointsWithoutAuth = ['auth'];

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: async (headers, api) => {
    const authorized = (api.getState() as RootState).auth.authorised;
    const token = await getToken();

    if (endpointsWithoutAuth.includes(api.endpoint)) {
      return headers;
    }
    if (token !== null) {
      if (authorized) {
        //refresh token jesli chcemy
      }
      headers.set('authorization', token.token);
    }
    return headers;
  },
});

const baseQueryWithTokenCheck: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  const authorized = (api.getState() as RootState).auth.authorised;

  if (authorized) {
    if (result.error?.status === 401) {
      api.dispatch(logout());
      return result;
    }

    if (result.error?.status !== 200) {
      if (result.error) {
        Alert.alert(JSON.stringify(args), JSON.stringify(result.error));
        console.log('Arguments: ', JSON.stringify(args));
        console.log('Error: ', JSON.stringify(result.error));
      }
    }
  }
  return result;
};

export const EduApp = createApi({
  reducerPath: 'EduApp',
  baseQuery: baseQueryWithTokenCheck,
  endpoints: () => ({}),
  tagTypes: [],
});
