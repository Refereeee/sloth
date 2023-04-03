import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { objectForBenefitItems, objectForLinks } from '../../data/homeData';
import { ObjBenefitsType, ObjLinksType } from '../../types/homeDataTypes';

interface HomeState {
    sliderRight: boolean,
    sliderLeft: boolean,
    leftDisabled: boolean,
    rightDisabled: boolean,
    showAll: boolean,
    objectLinks: ObjLinksType[],
    objectBenefitItems: ObjBenefitsType[]
}

const initialState: HomeState = {
  sliderRight: false,
  sliderLeft: true,
  leftDisabled: true,
  rightDisabled: false,
  showAll: false,
  objectLinks: objectForLinks,
  objectBenefitItems: objectForBenefitItems,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeHomeSliderRight: (state, action: PayloadAction<boolean>) => {
      state.sliderRight = action.payload;
      state.sliderLeft = false;
      state.rightDisabled = true;
      state.leftDisabled = false;
    },
    changeHomeSliderLeft: (state, action:PayloadAction<boolean>) => {
      state.sliderLeft = action.payload;
      state.sliderRight = false;
      state.leftDisabled = true;
      state.rightDisabled = false;
    },
    changeShowAll: (state, action:PayloadAction<boolean>) => {
      state.showAll = action.payload;
    },
  },
});

export const {
  changeHomeSliderRight,
  changeHomeSliderLeft,
  changeShowAll,
} = homeSlice.actions;

export const homeOptions = (state: RootState) => state.home;

export default homeSlice.reducer;
