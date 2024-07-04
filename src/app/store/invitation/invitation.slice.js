import { createSlice } from '@reduxjs/toolkit';

export const InvitationSlice = createSlice({
    name: 'invitation',
    initialState: {
      students: [],
    },
    reducers: {

      setStudents: ( state, { payload } ) => {
        state.students = payload;
      },
    }
})

export const { setStudents } = InvitationSlice.actions;
