import { useInView } from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div ref={ref} className={`hero__inner fade-up ${inView ? 'visible' : ''}`}>
          <div className="hero__text">
            <span className="hero__label">Software Engineer · Finland</span>
            <h1 className="hero__name">Md Shariful Islam</h1>
            <p className="hero__tagline">Full-Stack Development · Cloud · Human-Centered Design</p>
            <p className="hero__sub">
              Building scalable, user-focused software — from React frontends and Java backends
              to cloud infrastructure and research-driven applications.
            </p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">View My Work</a>
              <a href="#contact" className="btn btn--outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero__photo-wrap">
            <div className="hero__photo-accent" />
            <img
              src="/headshot_photo.jpg"
              alt="Md Shariful Islam"
              className="hero__photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
