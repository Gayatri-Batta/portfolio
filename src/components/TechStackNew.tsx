import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { config } from '../config'
import './styles/TechStackNew.css'

gsap.registerPlugin(ScrollTrigger)

const ROWS = [12, 10, 8, 6, 4, 2]

const TechStackNew = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelector('h2'),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    )

    gsap.fromTo(
      el.querySelectorAll('.tech-item'),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.03, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      }
    )
  }, [])

  const techStack = config.techStack
  let cursor = 0

  return (
    <div className="techstack-new" id="techstack" ref={sectionRef}>
      <div className="techstack-blobs" aria-hidden="true">
        <div className="ts-blob ts-blob-1" />
        <div className="ts-blob ts-blob-2" />
        <div className="ts-blob ts-blob-3" />
      </div>
      <div className="techstack-inner section-container">
        <h2>Tech <span>Stack</span></h2>
        <div className="tech-pyramid">
          {ROWS.map((count, rowIdx) => {
            const rowItems = techStack.slice(cursor, cursor + count)
            cursor += count
            return (
              <div key={rowIdx} className="tech-row">
                {rowItems.map((tech, i) => (
                  <a
                    key={i}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-item"
                    title={tech.name}
                  >
                    <img src={tech.icon} alt={tech.name} loading="lazy" />
                    <span>{tech.name}</span>
                  </a>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechStackNew
