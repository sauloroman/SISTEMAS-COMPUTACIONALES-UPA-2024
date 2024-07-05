import Pride from 'react-canvas-confetti/dist/presets/pride'

export const Confetti = () => {
  return <Pride 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
    }} 
    autorun={{ speed: 15, duration: 1500, delay: 500 }} 
  />
}
