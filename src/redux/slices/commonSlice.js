import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const commonSlice = createSlice({
  name: 'commonstoreslice',
  initialState: {
    settingsCurrentTab: 0,
    sidebarOpen: false
  },
  reducers: {
    setSettingsCurrentTab: (state, action) => {
      state.settingsCurrentTab = action.payload  ;
    },

    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload  ;
    },

  },
});

export const {setSettingsCurrentTab, setSidebarOpen} =
  commonSlice.actions;

export const commonSliceReducer = commonSlice.reducer;
