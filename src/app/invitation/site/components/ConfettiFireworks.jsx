import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'

export const ConfettiFireworks = () => {
  return (
    <Fireworks style={{   
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 999,
    }} autorun={{ speed: 2, duration: 5000 }} />
  )
}
