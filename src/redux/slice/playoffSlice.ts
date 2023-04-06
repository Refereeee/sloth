/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PlayoffState{
  requirementFlag:boolean,
  howWorkFlag:boolean,
  platformValue:string
}

const initialState: PlayoffState = {
  requirementFlag: false,
  howWorkFlag: false,
  platformValue: 'pc',
};

export const playoffSlice = createSlice({
  name: 'playoff',
  initialState,
  reducers: {
    changeRequirementFlag: (state) => {
      if (state.requirementFlag) state.requirementFlag = false;
      else state.requirementFlag = true;
    },
    changeHowWorkFlag: (state) => {
      if (state.howWorkFlag) state.howWorkFlag = false;
      else state.howWorkFlag = true;
    },
    changePlatformValue: (state, action: PayloadAction<string>) => {
      state.platformValue = action.payload;
    },
  },
});

export const {
  changeRequirementFlag,
  changeHowWorkFlag,
  changePlatformValue,
} = playoffSlice.actions;

export const selectPlayoff = (state: RootState) => state.playoff;

export default playoffSlice.reducer;
