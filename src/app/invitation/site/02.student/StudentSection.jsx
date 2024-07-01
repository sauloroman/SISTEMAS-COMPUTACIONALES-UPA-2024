import careerIcon from '../../../../assets/img/career-icon.png';
import separator from '../../../../assets/img/separator-student.png';

export const StudentSection = () => {
  return (
    <section className="student">
      <div className="container student__container">
        <div className="flex flex-center">
          <img src={careerIcon} alt="Career icon" className='student__icon' />
        </div>
        <div className="flex flex-center">
          <h2 className="heading__secondary">Eres el protagonista</h2>
        </div>
        <p className="student__name">Saulo Román Santillán Nava</p>
        <div className="flex flex-center">
          <img src={separator} alt="Separator" className="student__separator" />
        </div>

        <p className="student__content">La graduación es una gran meta en la vida y tú la has alcanzado maravillosamente. ¡Te deseo que sea solo la primera de una larga serie! ¡Felicidades, graduado!</p>

        <button className="btn btn--black">Ver Boletos Digitales</button>
      </div>
    </section>
  )
}
