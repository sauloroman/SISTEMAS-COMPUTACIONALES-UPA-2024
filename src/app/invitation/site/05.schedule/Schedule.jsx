import scheduleBg from '../../../../assets/img/bg-student.png';
import itineraryMessage from '../../../../assets/img/itinerary-message.png';
import startsIcon from '../../../../assets/img/entrance-icon.png';
import coctailIcon from '../../../../assets/img/coctails-icon.png';
import cluteryIcon from '../../../../assets/img/clutery-icon.png';
import brindisIcon from '../../../../assets/img/brindis-icon.png';
import musicIcon from '../../../../assets/img/dj-icon.png';
import bandIcon from '../../../../assets/img/banda-icon.png';
import fireIcon from '../../../../assets/img/fire-icon.png';

export const Schedule = () => {
  return (
    <div className="schedule" style={{ backgroundImage: `url(${scheduleBg})`}}>
      <div className="schedule__line"></div>
      <div className="schedule__container container">
        <div className="flex flex-column-center">
          <h2 className="heading__secondary schedule__title">De principio a fin</h2>
        <img className='schedule__message' src={ itineraryMessage } alt="Itinerario del evento" />
        </div>
      </div>
      <ul className="schedule__list flex flex-column">
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">20:00</p>
          <div className="flex flex-center">
            <img src={ startsIcon } alt="Estrellas animadas" className="schedule__icon" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Recepción Invitados</p>
        </li>
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">20:00 <br /> 21:00</p>
          <div className="flex flex-center">
            <img src={ coctailIcon } alt="Estrellas animadas" className="schedule__icon" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Coctelería <br />(1 hora)</p>
        </li>
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">21:15</p>
          <div className="flex flex-center">
            <img src={ cluteryIcon } alt="Estrellas animadas" className="schedule__icon" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Cena <br />(3 tiempos)</p>
        </li>
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">21:50</p>
          <div className="flex flex-center">
            <img src={ brindisIcon } alt="Estrellas animadas" className="schedule__icon" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Brindis <br />(Pase lista)</p>
        </li>
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">22:00</p>
          <div className="flex flex-center">
            <img src={ musicIcon } alt="Estrellas animadas" className="schedule__icon" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Música DJ</p>
        </li>
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">01:00</p>
          <div className="flex flex-center">
            <img src={ bandIcon } alt="Estrellas animadas" className="schedule__icon schedule__icon--band" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Música Banda</p>
        </li>
        <li className="schedule__item flex flex-between">
          <p className="schedule__hour">02:00</p>
          <div className="flex flex-center">
            <img src={ fireIcon } alt="Estrellas animadas" className="schedule__icon" />
          </div>
          <p className='schedule__separator'></p>
          <p className="schedule__text">Fin del Evento</p>
        </li>
      </ul>
      <div className="schedule__line"></div>
    </div>
  )
}
