import { configureStore } from '@reduxjs/toolkit'
import register from "../redux/slice/registerSlice";
import login from "../redux/slice/loginSLice";
import productsFilter from "./slice/productsFilter";

export const store = configureStore({
    reducer: {
        register,
        login,
        productsFilter
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch