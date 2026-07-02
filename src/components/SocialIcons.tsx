import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { config } from '../config'
import './styles/SocialIcons.css'

const SocialIcons = () => {
  return (
    <>
    <a
      href={config.developer.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="resume-fixed"
    >
      RESUME &#9783;
    </a>
    <div className="social-icons">
      <a
        href={config.developer.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href={config.developer.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href={`mailto:${config.developer.email}`}
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
      <div className="social-line" />
    </div>
    </>
  )
}

export default SocialIcons
