import { ReactNode } from 'react'
import './styles/style.css'

interface HoverLinksProps {
  children: ReactNode
}

const HoverLinks = ({ children }: HoverLinksProps) => {
  return <div className="hover-link">{children}</div>
}

export default HoverLinks
