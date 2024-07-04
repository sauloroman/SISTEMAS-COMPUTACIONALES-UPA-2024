import { useEffect } from "react";
import { StudentsHeader } from "./StudentsHeader/StudentsHeader"
import { StudentsList } from "./StudentsList/StudentsList"
import { StudentsFooter } from "./StudentsFooter/StudentsFooter";
import graduadosMessage from '../../../assets/img/graduados-message.png';
import { useAuthentication, useTickets } from "../../hooks";

export const StudentsPage = () => {

  const { ticket: { event } } = useAuthentication();
  const { getAllTicketsOfEvent } = useTickets();

  useEffect(() => {
    getAllTicketsOfEvent( event );
  }, [])

  return (
    <div className="students-page flex flex-center">
      <div className="students-page__container animate__animated animate__zoomIn">
        <div className="students-page__content">
          <StudentsHeader />
          <div className="flex flex-center students-page__image-box">
            <img src={ graduadosMessage } alt="Los graduados texto" className="students-page__image" />
          </div>
          <StudentsList />
          <StudentsFooter />
        </div>
      </div>
    </div>
  )
}
