import careerName from '../../../../assets/img/hero-title.png';
import birrete from '../../../../assets/img/birrete.png';
import message from '../../../../assets/img/hero-message.png';

export const HeroSection = () => {
  return (
    <section className="hero">
      {/* <Rain /> */}
      <div className="hero__container df-border">
        <div className="hero__date">
          <p className="hero__date-text">27</p>
          <p className="hero__date-text">12</p>
          <p className="hero__date-text">24</p>
        </div>
        <div className="flex flex-end hero__icon-box">
          <img
            className="hero__icon"
            src={birrete}
            alt="Birrete de graduación"
          />
        </div>
        <div className="flex flex-start">
          <img src={careerName} alt="Career Name" className="hero__image" />
        </div>

        <div className="hero__content">
          <p className="hero__text">Con aprecio y cariño te invitamos a </p>
          <p className="hero__text">Nuestra Graduación</p>
        </div>

        <div className="hero__content">
          <p className="hero__text">viernes 27 Diciembre 2024</p>
          <p className="hero__text">HORA 08:00 PM</p>
        </div>

        <div className="hero__content">
          <p className="hero__text">Lago del Marqués</p>
          <p className="hero__text">
            Hacienda Nueva, San Ignacio, 20313 Aguascalientes, Ags.
          </p>
        </div>

        <div className="flex flex-start mb-4">
          <img src={message} alt="Career Name" className="hero__imageBottom" />
        </div>

        <div className="hero__school">
          <p>UPA</p>
        </div>
      </div>
    </section>
  );
};
