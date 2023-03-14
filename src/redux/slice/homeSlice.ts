/* eslint-disable no-param-reassign */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import {RootState} from "../store";

interface HomeState {
    sliderRight: boolean,
    sliderLeft: boolean,
    leftDisabled: boolean,
    rightDisabled: boolean,
    showAll: boolean
}

const initialState: HomeState = {
    sliderRight: false,
    sliderLeft: true,
    leftDisabled:true,
    rightDisabled:false,
    showAll: false
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
            },
            changeShowAll: (state,action:PayloadAction<boolean>) =>{
                state.showAll = action.payload
            }
        }
    }
)

export const {
    changeHomeSliderRight,
    changeHomeSliderLeft,
    changeShowAll
} = homeSlice.actions

export const homeOptions = (state: RootState) => state.home

export default homeSlice.reducer
