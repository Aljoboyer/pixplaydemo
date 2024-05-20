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

  }),
});

export const {
  useUserDataQuery,
} = userApi;