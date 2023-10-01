import { EduApp } from '_services/index';

import { LoginBody, RegisterBody } from './authTypes';

const authApi = EduApp.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<any, LoginBody>({
      query: body => {
        return {
          url: 'users/login',
          method: 'POST',
          body,
        };
      },
    }),
    register: builder.mutation<any, RegisterBody>({
      query: body => {
        return {
          url: 'users',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
