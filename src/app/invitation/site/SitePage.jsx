import { useEffect } from "react"
import { HeroSection } from "./01.hero/HeroSection"
import { StudentSection } from "./02.student/StudentSection"
import { Timer } from "./03.timer/Timer"
import { Locations } from "./04.locations/Locations"
import { Schedule } from "./05.schedule/Schedule"
import { Students } from "./06.students/Students"
import { DressCode } from "./07.dress-code/DressCode"
import { School } from "./08.school/School"
import { Footer } from "./09.footer/Footer"

import { TopBar } from "./components"
import { useUI } from "../../hooks"

export const SitePage = () => {

  const { closeMenu } = useUI();

  useEffect(() => {
    closeMenu();
  }, [])

  return (
    <>
      <TopBar />
      <div>
        <HeroSection />
        <StudentSection />
        <Timer />
        <Locations />
        <Schedule />
        <Students />
        <DressCode />
        <School />
        <Footer />
      </div>
    </>
  )
}
