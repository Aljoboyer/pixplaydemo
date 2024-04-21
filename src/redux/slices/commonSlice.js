import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const commonSlice = createSlice({
  name: 'creditInvoice',
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.count += action.payload  ;
    },
  },
});

export const {increaseCount} =
  commonSlice.actions;

export const commonSliceReducer = commonSlice.reducer;
