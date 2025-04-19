import { API_URL } from "@/constant";
import { apiSlice } from "@/services/base-query";
import { setUser } from "./auth-slice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: API_URL.LOGIN,
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    const userData = {
                        id: data.data.user.id,
                        name: data.data.user.name,
                        token: data.data.tokens.access.token,
                        email: data.data.user.email,
                        role: data.data.user.role,
                    };
                    console.log(userData)
                    dispatch(setUser(userData));
            
                    localStorage.setItem("user", JSON.stringify(userData));
                    localStorage.setItem("token", data.data.tokens.access.token);
                } catch (err) {
                    console.error("Login failed:", err);
                }
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
