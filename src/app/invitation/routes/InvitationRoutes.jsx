import { Routes, Route, Navigate } from "react-router-dom";
import { SitePage } from '../site/SitePage';
import { TicketPage } from '../ticket/TicketPage';
import { StudentsPage } from "../students/StudentsPage";

export const InvitationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <SitePage /> } />
      <Route path="ticket" element={ <TicketPage /> } />
      <Route path="students" element={ <StudentsPage /> } />
      <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
