import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const useAppDispatch = () => useDispatch();
