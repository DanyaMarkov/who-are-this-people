import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const peopleApi = createApi({
    reducerPath: 'peopleApi',
    tagTypes: ['People'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://randomuser.me/api/'}),
    endpoints: (build) => ({
        getPeople: build.query({
            query: (limit) => `?${limit && `results=${limit}`}`,
            // providesTags: (result) =>
            // result
            //   ? [
            //     //   ...result.map(({ uuid }) => ({ type: 'People' as const, result.login.uuid })),
            //       ...result.map(({ id }) => ({ type: 'People' as const, id })),
            //       { type: 'People', id: 'LIST' },
            //     ]
            //   : [{ type: 'PosPeoplets', id: 'LIST' }],
        })
    })
});

export const { useGetPeopleQuery } = peopleApi;