import abrasaAPI from "../../api/abrasaApi";
import { setAlert, setIsLoading } from "../ui/ui.slice";
import { login } from "./auth.slice";

const { VITE_TOKEN_NAME: localStorageName } = import.meta.env;

export const startSearchingTicket = ( ticketKey = '' ) => {
  return async ( dispatch ) => {

    dispatch( setIsLoading( true ) );

    try {      
      const { data: ticket } = await abrasaAPI.get(`api/tickets/keyPass/${ticketKey}`)
      
      const {
        isActive,
        phone,
        user,
        ...restTicket
      } = ticket;

      dispatch( login( restTicket ) );
      localStorage.setItem( localStorageName, JSON.stringify(ticketKey) );


    } catch (error) {
      console.log(error);
      const { error: errorMessage } = error?.response?.data;

      dispatch( setAlert({
        type: 'error',
        isOpen: true,
        text: errorMessage
      }));
      
      setTimeout(() => {
        dispatch( setAlert({
          type: '',
          isOpen: false,
          text: ''
        }));
      },3000)
    }

    dispatch( setIsLoading( false ) );

  }
}

export const startRenewTicket = () => {
  return async ( dispatch ) => {

    dispatch( setIsLoading( true ) );

    try {
      
      const ticketKey = JSON.parse(localStorage.getItem( localStorageName )) || ''

      if ( ticketKey ) {
        const { data: ticket } = await abrasaAPI.get(`api/tickets/keyPass/${ticketKey}`)
      
        const {
          isActive,
          phone,
          user,
          ...restTicket
        } = ticket;

        dispatch( login( restTicket ) );
        localStorage.setItem( localStorageName, JSON.stringify(ticketKey) );
      }

    } catch (error) {
      console.log(error);
    }

    dispatch( setIsLoading( false ) );

  }
}