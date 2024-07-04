import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      ticket: {},
      status: 'unauthorized', 
    },
    reducers: {

      login: ( state, { payload } ) => {
        state.status = 'authorized';
        state.ticket = payload;
      },

      logout: ( state, _ ) => {
        state.status = 'unauthorized';
        state.ticket = {};
      }

    }
})

export const {
  login,
  logout,
} = authSlice.actions;
