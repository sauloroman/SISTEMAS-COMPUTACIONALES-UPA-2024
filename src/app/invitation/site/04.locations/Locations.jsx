import locationIcon from '../../../../assets/img/location-icon.png';
import locationMessage from '../../../../assets/img/location-message.png';
import lagoImage1 from '../../../../assets/img/lago-1.jpg';
import lasPalmasImage from '../../../../assets/img/las-palmas.jpg';

export const Locations = () => {
  return (
    <section className="locations" id='locations'>
      <div className="locations__photo-box">
        <img
          src={lasPalmasImage}
          alt="Salon Las Palmas Picacho Imagen"
          className="locations__photo"
        />
        <div className="locations__overlay"></div>
      </div>
      <div className="locations__card">
        <p className="locations__type">Prefiesta (solo graduados)</p>
        <p className="locations__date">30 Septiembre 2024</p>
        <p className="locations__hour">03:00 PM - 08:00 PM</p>
        <p className="locations__name">Las Palmas Picacho</p>
        <p className="locations__address">
          Kilometro 14.5, Calvillo - Aguascalientes, 20994 Aguascalientes, Ags.
        </p>
        <button className="btn btn--brown locations__button">
          <a target="_blank" href="https://maps.app.goo.gl/ERTi28Y1q1shyAEJ9">
            Ver Ubicación
          </a>
        </button>
      </div>

      <div className="flex flex-column-center mt-4">
        <img
          className="locations__icon"
          src={locationIcon}
          alt="Icono de ubicacion"
        />
        <h2 className="heading__secondary">Ubicaciones</h2>
        <img
          className="locations__image locations__message"
          src={locationMessage}
          alt="Mensaje de ubicacion"
        />
      </div>

      <div className="locations__card">
        <p className="locations__type">Noche de Gala</p>
        <p className="locations__date">27 Diciembre 2024</p>
        <p className="locations__hour">08:00 PM - 02:00 AM</p>
        <p className="locations__name">
          Salón Lago <br /> del Marqués
        </p>
        <p className="locations__address">
          Hacienda Nueva, San Ignacio, 20313 Aguascalientes, Ags
        </p>
        <button className="btn btn--brown locations__button">
          <a target="_blank" href="https://maps.app.goo.gl/rz4DXjZoCyDwZMJYA">
            Ver Ubicación
          </a>
        </button>
      </div>
      <div className="locations__photo-box">
        <img
          src={lagoImage1}
          alt="Imagen de bellagio"
          className="locations__photo"
        />
        <div className="locations__overlay"></div>
      </div>
    </section>
  );
};
