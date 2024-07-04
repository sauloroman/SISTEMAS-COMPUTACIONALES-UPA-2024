import { useTickets } from "../../../hooks"
import { StudentsItem } from "../StudentsItem/StudentsItem"

export const StudentsList = () => {

  const { students } = useTickets();

  return (
    <ul className="students-list">
      {
        students.map( student => (
          <StudentsItem key={ student } name={ student } />
        ))
      }
    </ul>
  )
}
