import { EduApp } from '_services/index';

import { SchoolsFilterBody } from './schoolsTypes';

const schoolsApi = EduApp.injectEndpoints({
  endpoints: builder => ({
    getOptions: builder.query<any, void>({
      query: () => {
        return {
          url: 'schools/options',
          method: 'GET',
        };
      },
    }),
    schoolsFilter: builder.query<any, SchoolsFilterBody>({
      query: ({
        region = '',
        city = '',
        languages = ['Angielski', 'Niemiecki'],
        extendedSubject = '',
        profile = '',
      }) => {
        return {
          url: 'Messages/GetMessages',
          method: 'GET',
          params: {
            region,
            city,
            languages,
            extendedSubject,
            profile,
          },
        };
      },
    }),
  }),
});

export const { useGetOptionsQuery, useSchoolsFilterQuery } = schoolsApi;
