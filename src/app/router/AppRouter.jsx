import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InvitationRoutes } from '../invitation/routes/InvitationRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />}/>
      <Route path="/*" element={<InvitationRoutes />} />
    </Routes>
  )
}
