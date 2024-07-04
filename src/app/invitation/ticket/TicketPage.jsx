import { useAuthentication } from '../../hooks';
import ticketMessage from '../../../assets/img/ticket-message.png';
import { Link } from 'react-router-dom';

export const TicketPage = () => {
  const {
    ticket: {
      name,
      qrCode,
      keyPass,
      adultsQuantity,
      adultsCounter,
      kidsQuantity,
      kidsCounter,
      table,
    },
  } = useAuthentication();

  return (
    <div className="ticket">
      <div className="animate__animated animate__zoomIn">
        <div className="flex flex-column-center ticket__container">
          <img
            src={ticketMessage}
            alt="Tus Boletos Digitales texto"
            className="ticket__message"
          />
          <div className="ticket__line"></div>
          <p className="ticket__title">RSVP</p>
          <p className="ticket__name">{name}</p>
          <img src={qrCode} alt="Codigo Qr" className="ticket__image" />
          <p className="ticket__table">
            Mesa: <span>{!table ? 'Por Asignar' : table}</span>
          </p>
          <p className="ticket__instructions">
            Presenta este código al llegar a recepción de tu evento
          </p>
          <div className="ticket__numbers">
            <div className="ticket__concept">
              <p className="ticket__number">{adultsQuantity - adultsCounter}</p>
              <p>Adultos</p>
            </div>
            <div className="ticket__concept">
              <p className="ticket__number">{kidsQuantity - kidsCounter}</p>
              <p>Niños</p>
            </div>
          </div>
          <div className="ticket__line"></div>
        </div>
        <div className="ticket__folie">
          <p className="ticket__address">
            <span>Lago del Marqués</span> <br />
            Hacienda Nueva, San Ignacio, 20313 Aguascalientes, Ags
          </p>
          <div className="ticket__ticket">
            Folio <br /> <span>{keyPass}</span>
          </div>
        </div>
        <Link to="/" className="ticket__button">
          <div className="flex flex-center h-100 df-shadow">
            <i className="bx bx-left-arrow-alt ticket__icon"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};
