import { API_URL } from "@/constant";
import {apiSlice} from "@/services/base-query";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: (params = {}) => {
                const queryString = new URLSearchParams(params).toString();
                return {
                    url: `${API_URL.CATEGORY_GETALL}${queryString ? `?${queryString}` : ''}`,
                    method: "GET",
                };
            },
            providesTags: ['Category']
        }),
        createCategory: builder.mutation({
            query: (payload) => ({
                url: API_URL.CATEGORY_CREATE,
                method: "POST",
                body: payload
            }),
            invalidatesTags: ['Category']
        }),
    })
});

export const {
    useGetAllCategoryQuery,
    useCreateCategoryMutation
} = categoryApi