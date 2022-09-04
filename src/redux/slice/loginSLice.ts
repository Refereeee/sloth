import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import getLocalStorageItems from "./functions/getLocalStorageItems";
import isValidLog from "./functions/isValidLog";
import getCurrentUserFind from "./functions/currentUser";


interface CounterState {
    login: string,
    password: string,
    loginFlag: boolean,
    passwordFlag: boolean,
    buttonValue: boolean,
    items: any,
    loginSuccessFlag: boolean,
    currentUserFind: any
}

const getLocalItems = getLocalStorageItems()
const getLocalUser = getCurrentUserFind()

const initialState: CounterState = {
    login: '',
    password: '',
    loginFlag: false,
    passwordFlag: false,
    buttonValue: true,
    items: getLocalItems,
    loginSuccessFlag: false,
    currentUserFind: getLocalUser,
}

// const checkLoginParams = (stateItems, login, password) => {
//
// }

export const loginSlice = createSlice({
    name: 'login',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        changeLoginValue: (state, action: PayloadAction<string>) => {
            state.login = action.payload
        },
        changePasswordValue: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        changeLoginFlagValue: (state, action: PayloadAction<boolean>) => {
            state.loginFlag = action.payload
        },
        changePasswordFlagValue: (state, action: PayloadAction<boolean>) => {
            state.passwordFlag = action.payload
        },
        changeButtonValue: (state, action: PayloadAction<boolean>) => {
            state.buttonValue = action.payload
        },
        setLocalStorageItem: (state, action: PayloadAction<any>) => {
            if (isValidLog(state.items, action.payload)) {
                state.items.push(action.payload)
                localStorage.setItem('items', JSON.stringify(state.items))
                // state.registerFlag = true
            }
        },
        // registerFlagToOff: (state) => {
        //     state.registerFlag = false
        // },

        // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const {
    changeLoginValue,
    changePasswordValue,
    changeLoginFlagValue,
    changePasswordFlagValue,
    changeButtonValue
} = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectReg = (state: RootState) => state.login

export default loginSlice.reducer