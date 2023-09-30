import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  dark: boolean;
}
const initialState: ThemeState = {
  dark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState as ThemeState,
  reducers: {
    toggleTheme: state => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
