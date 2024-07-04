import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from '../login/LoginPage';
import { useUI } from "../../hooks";
import { Alert } from "../../invitation/site/components";

export const AuthRoutes = () => {

  const { alert } = useUI();
  
  return (
    <>
      { alert.isOpen && <Alert /> }
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </>
  )
}
