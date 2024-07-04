import { useDispatch, useSelector } from "react-redux"
import { startRenewTicket, startSearchingTicket } from "../store/auth/auth.thunks";
import { logout } from "../store/auth/auth.slice";

const { VITE_TOKEN_NAME: localStorageName } = import.meta.env;

export const useAuthentication = () => {

  const dispatch = useDispatch();
  const { status, ticket } = useSelector( state => state.auth );

  const loginTicket = ( ticketKey = '' ) => {
    dispatch( startSearchingTicket( ticketKey ) );
  }

  const logoutTicket = () => {
    dispatch( logout() );
    localStorage.removeItem( localStorageName );
  }

  const renewToken = () => {
    dispatch( startRenewTicket() );
  }

  return {
    status,
    ticket,
    
    loginTicket,
    logoutTicket,
    renewToken,
  }

}