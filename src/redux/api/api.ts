import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:5000/tasks
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes:['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params= new URLSearchParams();

        if (priority) {
          params.append('priority',priority)
        }
      return{
        url: `/tasks`,
        method: "GET",
        params:params
      }
      },
      providesTags:['Todo']
    }),
    postTodo: builder.mutation({
      query:(data)=> ({
        url: "/task",
        method: "POST",
        body:data
      }),
      invalidatesTags:["Todo"]
    }),
  }),
});
// console.log(baseApi.g);
export const { useGetTodosQuery,usePostTodoMutation } = baseApi;
