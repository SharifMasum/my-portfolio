import { ExternalLink } from 'lucide-react'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const PROJECTS = [
  {
    title: 'Uncommon Ground',
    desc: 'A web-based cooperative strategy game promoting equity, diversity, and inclusion. Players join groups, select unique alien characters, and collaborate through turn-based voting across phases involving resource management and tool upgrades. Built with real-time multiplayer via WebSocket.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'WebSocket', 'Ratchet'],
    github: 'https://github.com/SharifMasum/game-app',
  },
  {
    title: 'Doctor Appointment Booking',
    desc: 'A RESTful backend API for managing appointments between doctors and patients. Features session-based authentication with Passport.js, JWT authorization, MongoDB session storage, and full interactive API documentation via Swagger UI.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Passport.js', 'JWT', 'Swagger'],
    github: 'https://github.com/SharifMasum/doctor-appointment-booking',
  },
  {
    title: 'Full-Stack Employee Manager',
    desc: 'A full-stack CRUD application for managing employee records. Features a Java backend with RESTful endpoints, an Angular frontend, and a MySQL database — demonstrating end-to-end application architecture and API integration.',
    stack: ['Java', 'Angular', 'MySQL'],
    github: 'https://github.com/SharifMasum/full-stack-employee-manager-application',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <FadeIn>
          <SectionHeader label="What I've Built" title="Projects" />
        </FadeIn>
        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="project-card">
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__chips">
                  {project.stack.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
