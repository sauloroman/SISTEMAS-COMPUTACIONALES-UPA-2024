import amigoLogo from '../../../../assets/img/amigo-logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-center">
        <img className='footer__logo' src={ amigoLogo } alt="Tu Amigo Invitaciones Logo" />
      </div>
      <div className="footer__content">
        <p className="footer__text">Diseñado por TuAmigoInvitaciones</p>
        <p className='footer__insta'>Instagram: <a href="https://www.instagram.com/tuamigoinvitaciones/">@tuamigoinvitaciones</a></p>
        <div className="flex flex-end">
          <a className='footer__button btn' target='_blank' href="https://wa.me/4496548073?text=Hola, quiero cotizar una invitación digital 💌">Contáctanos</a>
        </div>
      </div>
    </footer>
  )
}
