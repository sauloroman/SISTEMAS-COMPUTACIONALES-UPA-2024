import { useUI } from "../../../hooks/useUI"

export const Alert = () => {

  const { alert: { type, text, isOpen } } = useUI();

  return (
    <div className={`alert ${ isOpen ? 'alert__show' : 'alert__hide' }`}>
      <div className="alert__grid flex flex-between">
        <div className="alert__visuals">
          <div className={`alert__color alert__color--${type}`}></div>
          <i className={`bx bx-info-circle alert__icon alert__icon--${type}`} ></i>
        </div>
        <div className="alert__info">
          <p className={`alert__type alert__type--${type}`}>{ type === 'success' ? 'Exito' : 'Error'}</p>
          <p className="alert__text">{ text }</p>
        </div>
      </div>
    </div>
  )
}
