import sistemsImage from '../../../../assets/img/sistemas-white.png';

export const LoginTop = () => {
  return (
    <div className="login-top">
      <div className="flex flex-center">
        <p className='logo logo--big'>&lt;ISC /&gt;</p>
      </div>
      <div className="login-top__date">27 &mdash; Dic &mdash; 2024</div>
      <div className="flex flex-center">
        <img className='login-top__image' src={ sistemsImage } alt="Sistemas Computacionales Texto Blanco" />
      </div>
    </div>
  )
}
  