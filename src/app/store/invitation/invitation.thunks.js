import abrasaAPI from "../../api/abrasaApi";
import { setIsLoading } from "../ui/ui.slice"
import { setStudents } from "./invitation.slice";

export const startGettingAllTicketsOfEvent = ( eventID = '' ) => {
  return async ( dispatch ) => {

    dispatch( setIsLoading( true ) );

    try {
      const { data } = await abrasaAPI.get(`api/tickets/event/${eventID}?limit=100`);
      const { tickets } = data;
      const ticketsName = tickets.map( ticket => ticket.name ).sort();
      dispatch( setStudents( ticketsName ) )
    } catch (error) {
      console.log(error);
    }

    dispatch( setIsLoading( false ) );

  }
}