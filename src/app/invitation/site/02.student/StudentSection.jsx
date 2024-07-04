import { Link } from 'react-router-dom';
import studentSeparator from '../../../../assets/img/student-separator.png';
import { useAuthentication } from '../../../hooks';

export const StudentSection = () => {

  const { ticket: { name } } = useAuthentication()

  return (
    <main className="student" id='tickets'>
      <div className="student__line student__line--1"></div>
      <div className="student__container">
        <div className="flex flex-center">
          <h2 className='heading__secondary'>Solo para tí</h2>
        </div>
        <p className="student__name text-center">{ name }</p>
        <div className="student__separator-box flex flex-center">
          <img src={ studentSeparator } alt="Separator Elegant" className="student__separator" />
        </div>
        <p className="student__text">La graduación es una gran meta en la vida y tú la has alcanzado maravillosamente. ¡Te deseo que sea solo la primera de una larga serie! ¡Felicidades, graduado!</p>
        <Link to='ticket' className="btn btn--green text-center student__button flex flex-center">
          <p className="student__button-text">Ver Boletos Digitales</p>
        </Link>
      </div>
      <div className="student__line student__line--2"></div>
    </main>
  )
}
