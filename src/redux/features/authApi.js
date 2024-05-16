import { api } from "../api/api";

const authApi = api.injectEndpoints({ 
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data ) => ({
        url: 'merchant/signup',
        method: 'POST',
        body: data,
      }),
    //   invalidatesTags: [''],
    }),
  }),
});

export const {
  useSignUpMutation,
} = authApi;