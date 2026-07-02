import { useEffect } from 'react'
import { config } from '../config'
import { runInitialFX } from './utils/initialFX'
import { useLoading } from '../context/LoadingProvider'
import './styles/Landing.css'

const Landing = () => {
  const { isLoading } = useLoading()
  const nameParts = config.developer.fullName.split(' ')
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(' ')

  useEffect(() => {
    if (!isLoading) runInitialFX()
  }, [isLoading])

  return (
    <div className="landing-section" id="landingDiv">

      {/* Photo — full-bleed right side, bleeds to edge */}
      <div className="landing-photo">
        <img src={config.developer.photo} alt={config.developer.fullName} />
      </div>

      <div className="landing-container">
        {/* Name */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            {firstName.toUpperCase()}
            {lastName && <><br /><span>{lastName.toUpperCase()}</span></>}
          </h1>
        </div>

        {/* Title */}
        <div className="landing-info">
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">{config.developer.title}</div>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Landing
