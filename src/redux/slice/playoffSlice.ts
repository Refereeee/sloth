/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PlayoffState{
  requirementFlag:boolean
}

const initialState: PlayoffState = {
  requirementFlag: false,
};

export const playoffSlice = createSlice({
  name: 'playoff',
  initialState,
  reducers: {
    changeRequirementFlag: (state) => {
      if (state.requirementFlag) state.requirementFlag = false;
      else state.requirementFlag = true;
    },
  },
});

export const {
  changeRequirementFlag,
} = playoffSlice.actions;

export const selectPlayoff = (state: RootState) => state.playoff;

export default playoffSlice.reducer;
