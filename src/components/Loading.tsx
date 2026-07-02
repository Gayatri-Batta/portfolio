import { useEffect } from 'react'
import { useLoading } from '../context/LoadingProvider'
import './styles/Loading.css'

const Loading = () => {
  const { isLoading, setIsLoading } = useLoading()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [setIsLoading])

  if (!isLoading) return null

  return (
    <div className={`loading-screen ${!isLoading ? 'loading-screen--hidden' : ''}`}>
      <div className="loading-content">
        <p className="loading-name">GB</p>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default Loading
