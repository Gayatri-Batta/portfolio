import { gsap } from 'gsap'

export function runInitialFX() {
  const tl = gsap.timeline({ delay: 0.2 })

  tl.to('.landing-intro', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
    .to('.landing-info',  { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
    .to('.social-icons',  { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    .to('.resume-fixed',  { opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
}
