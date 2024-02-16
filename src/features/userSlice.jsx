import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode';

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async(data, thunkAPI) => {
        try{
            const response = await fetch("http://localhost:3000/users",{
                method:"POST",
                body: data
            });
            if(!response.ok){
                const error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }else{
                const newUser = await response.json();
                return newUser;
            }
        } catch(error){return thunkAPI.rejectWithValue(error.message)}
    }
)

export const getUser = createAsyncThunk(
    "user/getUser",
    async(number, thunkAPI) => {
        const token = localStorage.getItem("token");
        let decodedToken = jwtDecode(token);
        try{
            const response = await fetch(`http://localhost:3000/users/${decodedToken['id']}`, {
                method:'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `${token}`
                }
            })
            if(!response.ok){
                const error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }
            const user = await response.json();
            return user;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const handleLogin = createAsyncThunk(
    "user/handleLogin",
    async (values, thunkAPI) => {
        try{
            const response = await fetch(`http://localhost:3000/login`, {
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({user:values})
            })
            if(!response.ok){
                const error = await response.json();
                return thunkAPI.rejectWithValue(error);
            }else{
                const data = await response.json();
                localStorage.setItem("token", data.token);
                return data.user;
            }
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)


const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null
    },
    reducers: {
        login:(state, action) => {
            state.user = action.payload;
        },
        logout:(state) => {
            state.user = null;
        },
        // update:(state,action) =>{
        //     state.user = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled, (state,action) => {
            state.user = action.payload;
        })
        .addCase(handleLogin.fulfilled, (state,action) => {
            state.user = action.payload;
        })
        // .addCase(updateUser.fulfilled, (state,action) => {
        //     state.user = action.payload;
        // })
    }
})

export const {login, logout, update} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;