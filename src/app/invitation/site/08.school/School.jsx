import upaImage from '../../../../assets/img/upa-image.jpg';
import congraImage from '../../../../assets/img/school-congra.png'
import { ConfettiFireworks } from '../components/ConfettiFireworks';
import { useState } from 'react';

export const School = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  
  const onConfetti = () => {
    setIsConfettiVisible( true );
    setTimeout(() => setIsConfettiVisible( false ), 6000 );
  }

  return (
    <>    
      { isConfettiVisible && <ConfettiFireworks />}
      <section className="school" id='thanks'>
        <div className="school__image" style={{ backgroundImage: `url(${upaImage})`}}></div>
        <div className="school__container container df-shadow">
          <div className="flex flex-center">
            <h2 className="heading__secondary text-dark">Un Logro Más</h2>
          </div>
          <div className="flex flex-center">
            <img src={ congraImage } alt="Felicidades texto" className="school__congra school__message" />
          </div>
          <p className="text-center school__text">Ahora eres todo un ingeniero en Sistemas Computacionales.</p>
          <div className="flex flex-center">
            <button onClick={ onConfetti } className='btn btn--green school__button'>Mira la Magia</button>
          </div>
        </div>
        <div className="school__line"></div>
      </section>
    </>
  )
}
