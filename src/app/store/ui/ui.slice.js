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

      setModal: ( state, { payload } ) => {
        const { name, isOpen, data } = payload;
        state.modal.name = name;
        state.isOpen = isOpen;
        state.data = data;
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
  setModal,
  activeLightTheme,
  activeDarkTheme,
} = uiSlice.actions;
