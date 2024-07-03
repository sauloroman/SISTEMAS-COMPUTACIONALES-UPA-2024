import dressMessage from '../../../../assets/img/dress-message.png';
import dressIcon from '../../../../assets/img/dress-icon.png';

export const DressCode = () => {
  return (
    <section className="dress" id='dress'>
      <div className="dress__container container df-shadow">
        <div className="flex flex-column-center">
          <img src={ dressIcon } alt="Dress icon" className="dress__icon" />
          <h2 className="heading__secondary">Vestimenta</h2>
          <img src={dressMessage} alt="Formal texto" className="dress__message" />
        </div>
        <p className='dress__type'>Recuerda usar ropa a la altura del momento. Tú eres el protagonista.</p>
      </div>
    </section>
  )
}
