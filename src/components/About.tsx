import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { config } from '../config'
import './styles/About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelector('h3'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    )

    gsap.fromTo(
      el.querySelector('p'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me section-container">
        <h3 className="about-label">ABOUT ME</h3>
        <p className="about-description">{config.about.description}</p>
      </div>
    </div>
  )
}

export default About
