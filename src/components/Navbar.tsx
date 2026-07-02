import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { config } from '../config'
import HoverLinks from './HoverLinks'
import './styles/Navbar.css'

gsap.registerPlugin(ScrollTrigger)

export let lenis: Lenis | null = null

const Navbar = () => {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    lenis = new Lenis({ duration: 1.7, easing: (t) => 1 - Math.pow(1 - t, 3) })

    const raf = (time: number) => {
      lenis!.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const links = headerRef.current?.querySelectorAll<HTMLAnchorElement>('[data-href]')
    links?.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector(link.dataset.href || '')
        if (target) lenis!.scrollTo(target as HTMLElement, { offset: 0 })
      })
    })

    // Fade in header
    gsap.fromTo(headerRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.4 })

    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return (
    <>
      <header className="header" ref={headerRef}>
        {/* Logo — left */}
        <a href="/" className="navbar-title">GB</a>

        {/* Email — center (absolute) */}
        <a href={`mailto:${config.developer.email}`} className="navbar-connect">
          {config.developer.email}
        </a>

        {/* Nav links — right */}
        <ul>
          <li>
            <a href="#about" data-href="#about">
              <HoverLinks><span>ABOUT</span></HoverLinks>
            </a>
          </li>
          <li>
            <a href="#work" data-href="#work">
              <HoverLinks><span>WORK</span></HoverLinks>
            </a>
          </li>
          <li>
            <a href="#contact" data-href="#contact">
              <HoverLinks><span>CONTACT</span></HoverLinks>
            </a>
          </li>
        </ul>
      </header>

      {/* Top fade overlay */}
      <div className="nav-fade" />

      {/* Decorative orb circles (fixed, full-page) */}
      <div className="landing-circle1" aria-hidden="true" />
      <div className="landing-circle2" aria-hidden="true" />
    </>
  )
}

export default Navbar
