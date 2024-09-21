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
import { useUI } from "../../hooks"
import { Confetti, TopBar } from "./components"

export const SitePage = () => {

  const { closeMenu } = useUI();

  useEffect(() => {
    
    closeMenu();
    const animation = new ScrollReveal({ reset: true, duration: 2000, delay: 1500, distance: '50px', scale: 1.1 });

    animation.reveal('[class$="__message"]', { origin: 'top', scale: 1.5})
    animation.reveal('.heading__secondary', { origin: 'bottom', scale: 1.2} );

    animation.reveal('.student__name', { scale: 3, origin: 'top' } );
    animation.reveal('.student__text', { origin: 'top', scale: 1} );
    animation.reveal('.student__button', { origin: 'bottom'})
    
    animation.reveal('.timer__box:nth-child(odd)', { origin: 'bottom' })
    animation.reveal('.timer__box:nth-child(even)', { origin: 'top' });
    animation.reveal('.timer__text', { origin: 'bottom' });
    
    animation.reveal('.locations__photo-box');
    animation.reveal('.locations__type', { origin: 'right' })
    animation.reveal('.locations__hour', { origin: 'right' })
    animation.reveal('.locations__name', { origin: 'left' })
    animation.reveal('.locations__address', { origin: 'left' });
    animation.reveal('.locations__button');
    
    animation.reveal('.schedule__item:nth-child(odd)', { origin: 'bottom', delay: 3000 });
    animation.reveal('.schedule__item:nth-child(even)', { origin: 'left', delay: 3000 });
    
    animation.reveal('.students__text', { origin: 'top' });
    animation.reveal('.students__button', { origin: 'bottom'})

    animation.reveal('.dress__type', { origin: 'top'});

    animation.reveal('.school__text', { origin: 'top'});
    animation.reveal('.school__image', { origin: 'left', delay: 3000 });
    animation.reveal('.school__button', { origin: 'bottom'});

  }, []);

  return (
    <>
      <Confetti />
      <TopBar />
      <div className="container">
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
