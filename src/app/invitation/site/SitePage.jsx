import { HeroSection } from "./01.hero/HeroSection"
import { StudentSection } from "./02.student/StudentSection"
import { Timer } from "./03.timer/Timer"
import { Locations } from "./04.locations/Locations"
import { Schedule } from "./05.schedule/Schedule"

export const SitePage = () => {
  return (
    <>
      <HeroSection />
      <StudentSection />
      <Timer />
      <Locations />
      <Schedule />
    </>
  )
}
