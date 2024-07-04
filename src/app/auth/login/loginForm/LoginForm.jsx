import { useState } from 'react';
import { useAuthentication, useForm } from '../../../hooks';

const formData = {
  keyPass: '',
};

const formValidations = {
  keyPass: [(value) => value.length > 0, 'La clave es necesaria'],
};

export const LoginForm = () => {
  const {
    keyPass,
    onInputChange,
    isFormValid,
    keyPassValid,
  } = useForm(formData, formValidations);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { loginTicket } = useAuthentication();

  const onLookForTicket = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if ( !isFormValid ) return;

    loginTicket( keyPass.trim() );
    setIsFormSubmitted(false);
  };

  return (
    <form onSubmit={onLookForTicket} className="form login-form">
      <div className="form__field">
        <span
          className={`form__span ${
            !isFormValid && isFormSubmitted ? 'text-wrong' : null
          }`}
        >
          {keyPassValid}
        </span>
        <input
          name="keyPass"
          value={keyPass}
          autoComplete='off'
          onChange={onInputChange}
          id="keyPass"
          placeholder="Clave de Acceso"
          className="form__input"
          type="text"
        />
      </div>
      <div className="form__button">
        <button className="btn btn--brown login-form__button">
          Buscar Invitación
        </button>
      </div>
    </form>
  );
};
