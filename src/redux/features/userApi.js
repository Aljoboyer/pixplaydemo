import { api } from "../api/api";

const userApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
    userData: builder.query({
      query: (credentials) =>({
        url: 'merchant/profile',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${credentials?.accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['userinfo'],
    }),

    updatePassword: builder.mutation({
      query: (data ) => ({
        url: 'merchant/updatePassword',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${data?.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: data?.password,
      }),
      // invalidatesTags: ['userinfo'],
    }),

    profileUpdate: builder.mutation({
      query: (data ) => ({
        url: 'merchant/profile',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${data?.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: data?.requestObj,
      }),
      invalidatesTags: ['userinfo'],
    }),

    getDepartment: builder.query({
      query: (credentials) =>({
        url: 'merchant/department',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${credentials?.accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
      // providesTags: ['userinfo'],
    }),

  }),
});

export const {
  useUserDataQuery,
  useUpdatePasswordMutation,
  useProfileUpdateMutation,
  useGetDepartmentQuery
} = userApi;