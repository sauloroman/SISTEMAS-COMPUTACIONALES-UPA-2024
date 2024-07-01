import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./app/router/AppRouter"

export const InvitationApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
