import { Music, Navigation } from "./"

export const TopBar = () => {
  return (
    <div className="topbar flex flex-between animate__animated animate__fadeIn">
      <Music />
      <Navigation />
    </div>
  )
}
