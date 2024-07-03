import studentsImg from '../../../../assets/img/students-message.png';

export const Students = () => {
  return (
    <section className="students section-space" id='students'>
      <div className="students__container container">
        <div className="flex flex-column-center">
          <h2 className="heading__secondary text-dark">Los Graduados</h2>
          <img src={ studentsImg } alt="You did it text" className='students__message' />
        </div>
        <p className="students__text">Formaste parte de un asombroso grupo de personas. Nunca te olvides de quienes pasaron por los mismos retos, tus compañeros.</p>
        <div className="flex flex-center">
          <button className="btn btn--green students__button">Ver Graduados</button>
        </div>
        <div className="students__line"></div>
      </div>
    </section>
  )
}
