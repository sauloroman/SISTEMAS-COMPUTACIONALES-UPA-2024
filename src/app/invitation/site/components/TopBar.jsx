import { Music, Navigation } from "./"

export const TopBar = () => {
  return (
    <div className="topbar flex flex-between">
      <Music />
      <Navigation />
    </div>
  )
}
