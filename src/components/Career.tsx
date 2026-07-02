import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { config } from '../config'
import './styles/Career.css'

gsap.registerPlugin(ScrollTrigger)

const formatPeriod = (period: string) => {
  return period.replace(' - ', ' – ').replace('Present', 'Present')
}

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    const list = listRef.current
    const dot = dotRef.current
    const fill = fillRef.current
    if (!el || !list || !dot || !fill) return

    gsap.fromTo(
      el.querySelector('h2'),
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      }
    )

    const rows = Array.from(list.querySelectorAll<HTMLElement>('.career-info-box'))

    const revealRows = (progress: number) => {
      rows.forEach((row, i) => {
        const threshold = i / rows.length
        row.classList.toggle('is-visible', progress >= threshold)
      })
    }

    const dotTween = gsap.to(dot, {
      top: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: list,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => revealRows(self.progress),
      },
    })

    const fillTween = gsap.to(fill, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: list,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    })

    revealRows(dotTween.scrollTrigger?.progress ?? 0)

    return () => {
      dotTween.scrollTrigger?.kill()
      dotTween.kill()
      fillTween.scrollTrigger?.kill()
      fillTween.kill()
    }
  }, [])

  return (
    <div className="career-section section-container" id="career" ref={sectionRef}>
      <div className="career-container">
        <h2 className="career-heading">
          My career <span>&</span>
          <br />experience
        </h2>

        <div className="career-info" ref={listRef}>
          <div className="career-line-track">
            <div className="career-line-fill" ref={fillRef} />
            <div className="career-dot" ref={dotRef} />
          </div>

          {config.experiences.map((exp, idx) => (
            <div key={idx} className="career-info-box">
              <div className="career-role">
                <h4>{exp.position}</h4>
                <h5>{exp.company}</h5>
              </div>
              <h3 className="career-year">{formatPeriod(exp.period)}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Career
