import { configureStore } from '@reduxjs/toolkit';
import register from "../redux/slice/registerSlice";
import login from "../redux/slice/loginSLice";
import home from "../redux/slice/homeSlice";

export const store = configureStore({
    reducer: {
        register,
        login,
        home
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch