export const StudentsItem = ({ name }) => {
  return (
    <li className="students-item flex flex-column-center">
      <div className="students-item__line"></div>
      <p className="students-item__name">{ name }</p>
    </li>
  )
}
