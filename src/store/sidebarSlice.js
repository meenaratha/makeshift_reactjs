// store/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isSidebarVisible: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    hideSidebar: (state) => {
      state.isSidebarVisible = false;
    },
  },
});

export const { toggleSidebar, hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
