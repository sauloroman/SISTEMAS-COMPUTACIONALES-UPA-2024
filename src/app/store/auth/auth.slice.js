import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      ticketID: null,
      status: 'unauthorized', 
    },
    reducers: {

      login: ( state, { payload } ) => {
        state.status = 'authorized';
        state.ticketID = payload;
      },

      logout: ( state, _ ) => {
        state.status = 'unauthorized';
        state.ticketID = null;
      }

    }
})

export const {
  login,
  logout,
} = authSlice.actions;
