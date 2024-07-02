import studentTop from '../../../../assets/img/student-top.png';
import studentSeparator from '../../../../assets/img/student-separator.png';

export const StudentSection = () => {
  return (
    <main className="student">
      <div className="student__corner-box flex flex-center">
        <img src={ studentTop } alt="White flowers" className="student__corner" />
      </div>
      <div className="container student__container">
        <div className="student__line student__line--1"></div>
        <div className="flex flex-center">
          <h2 className='heading__secondary'>Solo para tí</h2>
        </div>
        <p className="student__name text-center">Danna Janeth Sánchez Carreón</p>
        <div className="student__separator-box flex flex-center">
          <img src={ studentSeparator } alt="Separator Elegant" className="student__separator" />
        </div>
        <p className="student__text">La graduación es una gran meta en la vida y tú la has alcanzado maravillosamente. ¡Te deseo que sea solo la primera de una larga serie! ¡Felicidades, graduado!</p>
        <div className="flex flex-center">
          <button className="btn btn--green">Ver Boletos Digitales</button>
        </div>
        <div className="student__line student__line--2"></div>
      </div>
    </main>
  )
}
