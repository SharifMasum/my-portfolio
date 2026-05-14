import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C#', 'PHP', 'C', 'C++'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'HTML', 'CSS', 'SCSS', 'UX/UI Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Spring Boot', 'ASP.NET', 'REST APIs', 'Swagger / OpenAPI'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Azure Pipelines', 'GitHub Actions'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Jira', 'Bitbucket', 'Figma', 'Adobe Suite', 'Hyper-V', 'TwinCAT'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="What I Work With" title="Skills" />
        </FadeIn>
        <div className="skills__grid">
          {SKILL_GROUPS.map(({ title, skills }, i) => (
            <FadeIn key={title} delay={i * 80}>
              <div className="skill-card">
                <p className="skill-card__title">{title}</p>
                <div className="skill-card__chips">
                  {skills.map(s => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
