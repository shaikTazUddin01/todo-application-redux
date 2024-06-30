import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:5000/tasks
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
  }),
});
// console.log(baseApi.g);
export const { useGetTodosQuery } = baseApi;