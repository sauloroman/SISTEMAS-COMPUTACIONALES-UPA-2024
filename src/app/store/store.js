import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth.slice';
import { uiSlice } from './ui/ui.slice';
import { InvitationSlice } from './invitation/invitation.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    invitation: InvitationSlice.reducer,
  }
})