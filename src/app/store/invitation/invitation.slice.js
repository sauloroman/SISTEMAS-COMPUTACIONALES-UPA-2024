import { createSlice } from '@reduxjs/toolkit';

export const InvitationSlice = createSlice({
    name: 'invitation',
    initialState: {
      students: [],
      ticket: {},
    },
    reducers: {

      setStudents: ( state, { payload } ) => {
        state.students = payload;
      },

      setTicket: ( state, { payload } ) => {
        state.ticket = payload;
      }

    }
})

export const { setStudents, setTicket } = InvitationSlice.actions;
