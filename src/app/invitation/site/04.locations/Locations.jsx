import locationIcon from '../../../../assets/img/location-icon.png';
import locationMessage from '../../../../assets/img/location-message.png';

import lagoImage1 from '../../../../assets/img/lago-1.jpg';
import lagoImage2 from '../../../../assets/img/lago-2.jpg';
import lagoImage3 from '../../../../assets/img/lago-3.jpg';
import lagoImage4 from '../../../../assets/img/lago-4.jpg';

import bellagioImage1 from '../../../../assets/img/bellagio-1.jpg';
import bellagioImage2 from '../../../../assets/img/bellagio-2.jpg';
import bellagioImage3 from '../../../../assets/img/bellagio-3.jpg';
import bellagioImage4 from '../../../../assets/img/bellagio-4.jpg';

export const Locations = () => {
  return (
    <section className='locations'>
      <div className="locations__card">
        <div className="locations__gallery locations__gallery--pre">
          <div className="locations__photo-box">
            <img src={ bellagioImage1 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
          <div className="locations__photo-box">
            <img src={ bellagioImage2 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
          <div className="locations__photo-box">
            <img src={ bellagioImage3 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
          <div className="locations__photo-box">
            <img src={ bellagioImage4 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
        </div>
        <p className='locations__type'>Prefiesta (solo graduados)</p>
        <p className="locations__hour">05:00 PM - 11:00 PM</p>
        <p className="locations__name">Bellagio Garden</p>
        <p className='locations__address'>Chasela 203 Arboledas de Paso Blanco, 20907 aguascalientes, Ags.</p>
        <button className='btn btn--brown locations__button'>
          <a target='_blank' href="https://maps.app.goo.gl/YBNLm2vmBCN4yayk9">Ver Ubicación</a> 
        </button>
      </div>

      <div className="flex flex-column-center mt-4">
        <img className='locations__icon' src={ locationIcon } alt="Icono de ubicacion" />
        <h2 className="heading__secondary">Ubicaciones</h2>
        <img className='locations__image' src={ locationMessage } alt="Mensaje de ubicacion" />
      </div>
      
      <div className="locations__card">
        <p className='locations__type'>Noche de Gala</p>
        <p className="locations__hour">08:00 PM - 02:00 AM</p>
        <p className="locations__name">Salón Lago <br /> del Marqués</p>
        <p className='locations__address'>Hacienda Nueva, San Ignacio, 20313 Aguascalientes, Ags</p>
        <button className='btn btn--brown locations__button mb-4'>
          <a target='_blank' href="https://maps.app.goo.gl/rz4DXjZoCyDwZMJYA">Ver Ubicación</a>
        </button>
        <div className="locations__gallery locations__gallery--prom">
          <div className="locations__image-box">
            <img src={ lagoImage1 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
          <div className="locations__photo-box">
            <img src={ lagoImage2 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
          <div className="locations__photo-box">
            <img src={ lagoImage3 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
          <div className="locations__photo-box">
            <img src={ lagoImage4 } alt="Imagen de bellagio" className="locations__photo" />
          </div>
        </div>
      </div>

    </section>
  );
};
