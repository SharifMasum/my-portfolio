import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const EDUCATION = [
  {
    degree: "Master's Degree",
    subject: 'Full-Stack Software Development',
    institution: 'JAMK University of Applied Sciences',
    location: 'Jyväskylä, Finland',
    year: 'Graduated Dec 2025',
    desc: 'Modern software development, application frameworks, data modelling, cloud technologies, and software testing fundamentals.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'React', 'Java', 'Angular', 'Swagger'],
  },
  {
    degree: "Master's Degree",
    subject: 'Human Technology Interaction',
    institution: 'Tampere University',
    location: 'Tampere, Finland',
    year: 'Graduated Jun 2021',
    desc: 'Human-centered design, experience-driven design, cross-cultural design, and usability testing.',
    skills: ['UX/UI', 'Figma', 'InVision', 'Adobe Suite', 'Python'],
  },
  {
    degree: "Bachelor's Degree",
    subject: 'Electrical and Electronic Engineering',
    institution: 'University of Dhaka',
    location: 'Dhaka, Bangladesh',
    year: 'Graduated Nov 2013',
    desc: 'Electrical engineering, power systems, electronic engineering, and simulation.',
    skills: ['C', 'C++', 'MATLAB'],
  },
  {
    degree: 'Certificate',
    subject: 'Full-Stack Continuous Training',
    institution: 'University of Turku',
    location: 'Turku, Finland',
    year: 'Sep 2022',
    desc: 'Intensive full-stack software development training.',
    skills: ['Java', 'Spring Boot', 'JavaScript', 'React', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="Academic Background" title="Education" />
        </FadeIn>
        <div className="edu-grid">
          {EDUCATION.map((edu, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="edu-card">
                <p className="edu-card__degree">{edu.degree}</p>
                <p className="edu-card__subject">{edu.subject}</p>
                <p className="edu-card__institution">{edu.institution}</p>
                <p className="edu-card__year">{edu.location} · {edu.year}</p>
                <p className="edu-card__desc">{edu.desc}</p>
                <div className="edu-card__chips">
                  {edu.skills.map(s => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
