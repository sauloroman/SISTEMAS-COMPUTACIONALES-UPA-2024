import upaImage from '../../../../assets/img/upa-image.jpg';
import congraImage from '../../../../assets/img/school-congra.png'

export const School = () => {
  return (
    <section className="school">
      <div className="school__image" style={{ backgroundImage: `url(${upaImage})`}}></div>
      <div className="school__container container df-shadow">
        <div className="flex flex-center">
          <h2 className="heading__secondary">Un Logro Más</h2>
        </div>
        <div className="flex flex-center">
          <img src={ congraImage } alt="Felicidades texto" className="school__congra" />
        </div>
        <p className="text-center school__text">Ahora eres todo un ingeniero en: </p>
        <p className="school__career">Sistemas <br /> Computacionales</p>
        <div className="flex flex-center">
          <button className='btn btn--brown'>Mira la Magia</button>
        </div>
      </div>
      <div className="school__line"></div>
    </section>
  )
}
