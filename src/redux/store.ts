import { configureStore } from '@reduxjs/toolkit'
import register from "../redux/slice/registerSlice";
import login from "../redux/slice/loginSLice";

export const store = configureStore({
    reducer: {
        register,
        login
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch