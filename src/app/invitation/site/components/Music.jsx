import { useEffect, useRef, useState } from 'react';
import song from '../../../../assets/audio/song.mp3';

export const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if ( isPlaying ) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [ isPlaying ]);

  return (
    <div className="music">
      {isPlaying ? (
        <>
          <i
            onClick={() => setIsPlaying(false)}
            className="bx bx-pause music__icon"
          ></i>
          <p className="music__text">Pausar Música</p>
        </>
      ) : (
        <>
          <i
            onClick={() => setIsPlaying(true)}
            className="bx bx-play music__icon"
          ></i>
          <p className="music__text">Reproducir Música</p>
        </>
      )}
      <audio src={ song } ref={audioRef}></audio>
    </div>
  );
};
