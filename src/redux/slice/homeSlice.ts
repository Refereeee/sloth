import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface HomeState {
    sliderRight: boolean,
    sliderLeft: boolean,
    leftDisabled: boolean,
    rightDisabled: boolean
}

const initialState: HomeState = {
    sliderRight: false,
    sliderLeft: true,
    leftDisabled:true,
    rightDisabled:false
}

export const homeSlice = createSlice({
        name: "home",
        initialState,
        reducers: {
            changeHomeSliderRight: (state, action: PayloadAction<boolean>) => {
                state.sliderRight = action.payload
                state.sliderLeft = false
                state.rightDisabled = true
                state.leftDisabled = false
            },
            changeHomeSliderLeft: (state,action:PayloadAction<boolean>) => {
                state.sliderLeft = action.payload
                state.sliderRight = false
                state.leftDisabled = true
                state.rightDisabled = false
            }
        }
    }
)

export const {
    changeHomeSliderRight,
    changeHomeSliderLeft
} = homeSlice.actions

export const homeOptions = (state: RootState) => state.home

export default homeSlice.reducer