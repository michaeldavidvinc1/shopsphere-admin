import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: null,
        name: null,
        email: null,
        role: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.id = null;
            state.name = null;
            state.email = null;
            state.role = null;
            state.token = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;