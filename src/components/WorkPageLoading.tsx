import { useEffect, useState } from 'react'
import './styles/WorkPage.css'

const MARQUEE_TEXT = 'AI ENGINEER • FULL STACK DEVELOPER • ML RESEARCHER • '

interface Props {
  onDone: () => void
}

const WorkPageLoading = ({ onDone }: Props) => {
  const [percent, setPercent] = useState(0)
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + Math.ceil(Math.random() * 9) + 4
      })
    }, 90)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (percent < 100) return
    const welcomeTimer = setTimeout(() => setDone(true), 250)
    const hideTimer = setTimeout(() => {
      setHidden(true)
      onDone()
    }, 900)
    return () => {
      clearTimeout(welcomeTimer)
      clearTimeout(hideTimer)
    }
  }, [percent, onDone])

  return (
    <div className={`work-loading ${hidden ? 'work-loading--hidden' : ''}`}>
      <div className="work-loading-header">
        <span className="work-loading-logo">GayatriBatta</span>
        <div className="work-loading-eq">
          <span /><span /><span />
        </div>
      </div>

      <div className="work-loading-marquee">
        <div className="work-loading-marquee-track">
          <span>{MARQUEE_TEXT.repeat(4)}</span>
          <span>{MARQUEE_TEXT.repeat(4)}</span>
        </div>
      </div>

      <div className="work-loading-pill">
        <span>{done ? 'WELCOME' : `LOADING ${Math.min(percent, 100)}%`}</span>
        <i className="work-loading-caret" />
      </div>
    </div>
  )
}

export default WorkPageLoading
