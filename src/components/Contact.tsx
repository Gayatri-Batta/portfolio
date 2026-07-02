import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowUpRight } from 'react-icons/fi'
import { config } from '../config'
import './styles/Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelector('.contact-name'),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    )

    gsap.fromTo(
      el.querySelectorAll('.contact-col'),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      }
    )
  }, [])

  return (
    <div className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-orb" aria-hidden="true" />

      <div className="contact-inner section-container">
        <h2 className="contact-name">{config.developer.fullName.toUpperCase()}</h2>

        <div className="contact-grid">
          {/* Left: Email + Location */}
          <div className="contact-col">
            <div className="contact-info-group">
              <p className="contact-col-label">Email</p>
              <a
                href={`mailto:${config.developer.email}`}
                className="contact-info-value contact-email-link"
              >
                {config.developer.email}
              </a>
            </div>
            <div className="contact-info-group">
              <p className="contact-col-label">Location</p>
              <p className="contact-info-value">{config.developer.location}</p>
            </div>
          </div>

          {/* Middle: Social */}
          <div className="contact-col">
            <p className="contact-col-label">Social</p>
            <div className="contact-social-links">
              <a
                href={config.developer.github}
                target="_blank"
                rel="noopener noreferrer"
                             >
                Github <FiArrowUpRight className="contact-arrow" />
              </a>
              <a
                href={config.developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                             >
                Linkedin <FiArrowUpRight className="contact-arrow" />
              </a>
            </div>
          </div>

        </div>

        {/* Resume badge — right-aligned below grid */}
        <div className="contact-resume-row">
          <a
            href={config.developer.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-resume-badge"
                     >
            RESUME &#9783;
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
