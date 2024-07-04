import sistemsImage from '../../../../assets/img/sistemas-white.png';

export const LoginTop = () => {
  return (
    <div className="login-top">
      <div className="flex flex-center">
        <i className='bx bx-code-alt login-top__icon' ></i>
        </div>
      <div className="login-top__date">Dic | 27 | 2024</div>
      <div className="flex flex-center">
        <img className='login-top__image' src={ sistemsImage } alt="Sistemas Computacionales Texto Blanco" />
      </div>
    </div>
  )
}
  