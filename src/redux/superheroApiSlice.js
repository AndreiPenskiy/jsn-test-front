import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const superherosApi = createApi({
  reducerPath: "superherosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/superheroes",
  }),
  tagTypes: ["Superhero"],
  endpoints: (builder) => ({
    fetchSuperheros: builder.query({
      query: (page = 1) => `/?page=${page}`,
      providesTags: ["Superhero"],
    }),
    fetchSuperheroById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Superhero"],
    }),
    updateSuperhero: builder.mutation({
      query: ({ id, rest }) => {
        return {
          url: `${id}/update`,
          method: "PUT",
          body: rest,
        };
      },
      invalidatesTags: ["Superhero"],
    }),
    createSuperhero: builder.mutation({
      query: newHero => ({
        url: '/',
        method: 'POST',
        body: newHero,
      }),
      invalidatesTags: ['Superhero'],
    }),
    deleteSuperhero: builder.mutation({
      query(id) {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Superhero"],
    }),
  }),
});

export const {
  useFetchSuperherosQuery,
  useFetchSuperheroByIdQuery,
  useCreateSuperheroMutation,
  useUpdateSuperheroMutation,
  useDeleteSuperheroMutation,
} = superherosApi;