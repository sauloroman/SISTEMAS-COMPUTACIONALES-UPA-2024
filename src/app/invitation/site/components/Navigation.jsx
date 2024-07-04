import { useAuthentication } from "../../../hooks/useAuthentication";
import { useUI } from "../../../hooks/useUI"

export const Navigation = () => {

  const { isMenuOpen, openMenu, closeMenu } = useUI();
  const { logoutTicket } = useAuthentication();

  const onLogoutTicket = (e) => {
    e.preventDefault();
    logoutTicket();
  }

  return (
    <div className="navigation">
      <i onClick={ openMenu } className='bx bx-menu navigation__icon'></i>
      <nav className={`navigation__nav flex flex-column-between ${ isMenuOpen ? 'navigation__nav--open' : 'navigation__nav--close'}`}>
        <header className="flex flex-between navigation__header">
          <p className="navigation__name">ISC</p>
          <i onClick={ closeMenu } className='bx bx-x navigation__icon'></i>
        </header>
        <ul className="navigation__list flex flex-column">
          <li className="navigation__item"><a href="#home">Inicio</a></li>
          <li className="navigation__item"><a href="#tickets">Boletos Digitales</a></li>
          <li className="navigation__item"><a href="#timer">Cuenta Regresiva</a></li>
          <li className="navigation__item"><a href="#locations">Ubicaciones</a></li>
          <li className="navigation__item"><a href="#itinerary">Itinerario</a></li>
          <li className="navigation__item"><a href="#students">Graduados</a></li>
          <li className="navigation__item"><a href="#dress">Vestimenta</a></li> 
          <li className="navigation__item"><a href="#thanks">Agradecimiento</a></li> 
        </ul>
        <div className="navigation__line"></div>
        <button onClick={ onLogoutTicket } className="btn btn--green navigation__button">Salir</button>
      </nav>
    </div>
  )
}
