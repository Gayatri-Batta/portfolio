import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import { config } from '../config'
import Cursor from './Cursor'
import SocialIcons from './SocialIcons'
import WorkPageLoading from './WorkPageLoading'
import './styles/WorkPage.css'

const WorkPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflowY = 'auto'
    return () => { document.body.style.overflowY = 'hidden' }
  }, [])

  return (
    <div className="work-page">
      {loading && <WorkPageLoading onDone={() => setLoading(false)} />}
      <Cursor />
      <SocialIcons />

      <header className="work-page-header">
        <Link to="/" className="work-page-logo">GB</Link>
        <a href={`mailto:${config.developer.email}`} className="work-page-email">
          {config.developer.email}
        </a>
        <Link to="/#work" className="work-page-back">
          <FiArrowLeft /> Back to site
        </Link>
      </header>

      <div className="work-page-container">
        <h1 className="work-page-heading">
          My <span>Work</span>
        </h1>

        <div className="work-page-grid">
          {config.projects.map((project, idx) => (
            <article key={project.title} className="work-page-card">
              {/* Image banner */}
              <div className="work-page-img-wrap">
                <span className="work-page-num">{String(idx + 1).padStart(2, '0')}</span>
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="work-page-img-fallback">{project.category}</div>
                )}
              </div>

              {/* Card body */}
              <div className="work-page-body">
                <p className="work-page-category">{project.category}</p>
                <h3 className="work-page-title">{project.title}</h3>
                <p className="work-page-desc">{project.description}</p>

                <div className="work-page-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="work-page-tech-pill">{t}</span>
                  ))}
                </div>

                <div className="work-page-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-page-link">
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="work-page-link work-page-link--demo">
                      <FiExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkPage
