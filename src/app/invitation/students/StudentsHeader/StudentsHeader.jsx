import { Link } from "react-router-dom"

export const StudentsHeader = () => {
  return (
    <header className="students-header">
      <div className="students-header__grid flex flex-between">  
        <Link to='/' className="students-header__button">
          <div className="flex flex-center h-100 df-shadow">
            <i className='bx bx-left-arrow-alt students-header__icon'></i>
          </div>
        </Link>
        <div className="students-header__information">
          <p className="students-header__type">Tus Compañeros</p>
          <p className="students-header__title">La gloria es colectiva</p>
        </div>
      </div>
    </header>
  )
}
