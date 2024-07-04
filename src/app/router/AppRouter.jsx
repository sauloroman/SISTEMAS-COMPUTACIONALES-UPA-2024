import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InvitationRoutes } from '../invitation/routes/InvitationRoutes';
import { useAuthentication, useUI } from "../hooks";
import { useEffect } from "react";

export const AppRouter = () => {

  const { status, renewToken } = useAuthentication();

  useEffect(() => {
    renewToken();
  }, [])

  return (
    <Routes>
      {
        status === 'authorized'
        ? (<Route path="/*" element={<InvitationRoutes />} />)
        : (<Route path="auth/*" element={<AuthRoutes />}/>)
      }
      <Route path="/*" element={<Navigate to='auth/login' />}/>
    </Routes>
  )
}
