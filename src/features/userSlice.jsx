import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{},

    reducers: {
        login:(state, action) => {
            state.user = action.payload;
        },
        logout:(state) => {
            state.user = null;
        },
        update:(state,action) =>{
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled, (state,action) => {
            state.user = action.payload;
        })
        .addCase()
    }
})