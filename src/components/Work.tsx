import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { config } from '../config'
import './styles/Work.css'

gsap.registerPlugin(ScrollTrigger)

const GRADIENT_PALETTES = [
  'linear-gradient(135deg, #1a0533 0%, #0d1b3e 100%)',
  'linear-gradient(135deg, #0d1b3e 0%, #051a1a 100%)',
  'linear-gradient(135deg, #1a0d2e 0%, #0d2e1a 100%)',
  'linear-gradient(135deg, #0b1a33 0%, #1a0b33 100%)',
  'linear-gradient(135deg, #1a1a0b 0%, #0b1a33 100%)',
]

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const flexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const flex = flexRef.current
    if (!section || !flex) return

    const isMobile = window.innerWidth <= 768

    if (!isMobile) {
      const boxes = flex.querySelectorAll<HTMLElement>('.work-box')
      let totalWidth = 0
      boxes.forEach((b) => { totalWidth += b.offsetWidth })
      const translateX = totalWidth - window.innerWidth + 160

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${translateX + 200}`,
          pin: true,
          scrub: 1,
        },
      })

      tl.to(flex, { x: -translateX, ease: 'none' })

      return () => {
        tl.kill()
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.trigger === section) st.kill()
        })
      }
    }
  }, [])

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="work-flex" ref={flexRef}>
          {config.projects.slice(0, 5).map((project, idx) => (
            <a
              key={idx}
              className={`work-box ${idx % 2 === 1 ? 'work-box-reverse' : ''}`}
              href={project.github || project.demo || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Image / gradient placeholder */}
              <div className="work-image">
                <div className="work-image-in">
                  <div
                    className="work-image-placeholder"
                    style={{ background: GRADIENT_PALETTES[idx % GRADIENT_PALETTES.length] }}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="work-project-img"
                        loading="lazy"
                      />
                    )}
                    {!project.image && (
                      <span className="work-placeholder-label">{project.category}</span>
                    )}
                  </div>
                  <div className="work-link-group">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-link">
                        <FiGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="work-link">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="work-info">
                <div className="work-title">
                  <div>
                    <h4>{project.category}</h4>
                    <p>{project.tech.join(' · ')}</p>
                  </div>
                  <h3>{String(idx + 1).padStart(2, '0')}</h3>
                </div>
                <h4 className="work-project-name">{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </a>
          ))}

          {/* CTA box */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>See All Works</h3>
              <p>More projects, experiments, and open-source on GitHub.</p>
              <Link to="/work" className="see-all-btn">
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
