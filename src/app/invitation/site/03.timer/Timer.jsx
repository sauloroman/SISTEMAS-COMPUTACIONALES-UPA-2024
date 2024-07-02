import { useEffect, useState } from 'react';
import infiniteIcon from '../../../../assets/img/infinite-icon.png';
import saveTheDate from '../../../../assets/img/save-the-date.png';
import timerFlowers from '../../../../assets/img/timer-flowers.png';

export const Timer = () => {

  const [targetDate, setTargetDate] = useState(
    Math.ceil((new Date('12/27/2024 20:00').getTime() - new Date()) * 0.001)
  );
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(
      () =>
        setTargetDate(
          Math.ceil(
            (new Date('12/27/2024 20:00').getTime() - new Date()) * 0.001
          )
        ),
      1000
    );
  }, []);

  useEffect(() => {
    let temp = 0;

    let days = (targetDate / 86400).toString().split('.');
    temp = Number((`.` + days[1]).slice(0, 6)).toFixed(6);
    days = days[0];

    let hours = (temp * 24).toString().split('.');
    temp = Number((`.` + hours[1]).slice(0, 6)).toFixed(6);
    hours = hours[0];

    let minutes = (temp * 60).toString().split('.');
    temp = Number((`.` + minutes[1]).slice(0, 6)).toFixed(6);
    minutes = minutes[0];

    let seconds = (temp * 60).toString().split('.');
    seconds = seconds[0];

    setTimeData({
      days,
      hours,
      minutes,
      seconds,
    });
  }, [targetDate]);

  return (
    <section className="timer mb-4">
      <div className="timer__container container df-border">
      <div className="flex flex-center">
          <img className='timer__flowers timer__flowers--right' src={ timerFlowers } alt="White flowers" />
        </div>
        <div className="flex flex-center">
          <img className="timer__icon" src={ infiniteIcon } alt="Icono de infinito" />
        </div>
        <div className="flex flex-center">
          <h2 className="heading__secondary timer__title">Solo Falta</h2>
        </div>
        <div className="flex flex-center">
          <img src={ saveTheDate } alt="Save the date message" className="timer__message" />
        </div>
        <div className="timer__main">
          <div className="timer__box">
            <p className="timer__number">{timeData.days <= 9 ? `0${timeData.days}`: timeData.days}</p>
            <p className="timer__type">D</p>
          </div>
          <div className="timer__box">
            <p className="timer__number">{timeData.hours <= 9 ? `0${timeData.hours}`: timeData.hours}</p>
            <p className="timer__type">H</p>
          </div>
          <div className="timer__box">
            <p className="timer__number">{timeData.minutes <= 9 ? `0${timeData.minutes}`: timeData.minutes}</p>
            <p className="timer__type">M</p>
          </div>
          <div className="timer__box">
            <p className="timer__number">{timeData.seconds <= 9 ? `0${timeData.seconds}`: timeData.seconds}</p>
            <p className="timer__type">S</p>
          </div>
        </div>
        <p className="timer__text">Contamos los días para el inicio de tu fiesta. Será un momento para recordar con aquellos que quieres.</p>
        <div className="flex flex-center">
          <img className='timer__flowers timer__flowers--left' src={ timerFlowers } alt="White flowers" />
        </div>
      </div>
    </section>
  )
}
