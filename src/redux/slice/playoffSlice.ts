/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PlayoffState{
  requirementFlag:boolean,
  howWorkFlag:boolean
}

const initialState: PlayoffState = {
  requirementFlag: false,
  howWorkFlag: false,
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
  },
});

export const {
  changeRequirementFlag,
  changeHowWorkFlag,
} = playoffSlice.actions;

export const selectPlayoff = (state: RootState) => state.playoff;

export default playoffSlice.reducer;
