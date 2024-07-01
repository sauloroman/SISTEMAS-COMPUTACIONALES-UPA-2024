import { Routes, Route, Navigate } from "react-router-dom";
import { SitePage } from '../site/SitePage';
import { TicketPage } from '../ticket/TicketPage';

export const InvitationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <SitePage /> } />
      <Route path="ticket" element={ <TicketPage /> } />
      <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
