import { useDispatch, useSelector } from "react-redux"
import { startGettingAllTicketsOfEvent } from "../store/invitation/invitation.thunks";

export const useTickets = () => {

  const dispatch = useDispatch();
  const { students } = useSelector( state => state.invitation );

  const getAllTicketsOfEvent = ( eventID = '' ) => {
    dispatch( startGettingAllTicketsOfEvent( eventID ) )
  }

  return {
    students,
    getAllTicketsOfEvent,
  }

}