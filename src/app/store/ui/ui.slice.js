import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isLoading: false,
      isMenuOpen: false,
      theme: 'light',
      alert: {
        type: 'error',
        isOpen: false,
        text: 'Texto de prueba',
      }
    },
    reducers: {

      setIsLoading: ( state, {payload}) => {
        state.isLoading = payload;
      },

      setAlert: ( state, { payload } ) => {
        const { type, isOpen, text } = payload;
        state.alert.type = type;
        state.alert.isOpen = isOpen;
        state.alert.text = text;
      },

      setMenu: ( state, { payload } ) => {
        state.isMenuOpen = payload;
      },

      activeLightTheme: ( state, _ ) => {
        state.theme = 'light';
      },

      activeDarkTheme: ( state, _ ) => {
        state.theme = 'dark';
      }

    }
})

export const {  
  setIsLoading,
  setMenu,
  setAlert,
  activeLightTheme,
  activeDarkTheme,
} = uiSlice.actions;
