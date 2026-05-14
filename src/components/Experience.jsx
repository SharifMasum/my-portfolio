import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const JOBS = [
  {
    role: 'Researcher',
    company: 'Tampere University',
    location: 'Tampere, Finland',
    period: 'Feb 2025 – Oct 2025',
    bullets: [
      'Designed and developed a web-based educational game for the EU-commissioned GameHearts project.',
      'Worked at the intersection of educational technology, interactive systems, and research software development.',
    ],
    stack: [],
  },
  {
    role: 'Software Engineer',
    company: 'Glaston Oyj Abp',
    location: 'Tampere, Finland',
    period: 'Jan 2023 – Oct 2023',
    note: 'Consultant via Academic Work',
    bullets: [
      'Handled client requests, performed root cause analysis, fixed bugs, and developed new features for industrial software systems.',
      'Responsible for remote deployment and system maintenance.',
    ],
    stack: ['C#/.NET', 'XML', 'SQL', 'Git', 'JIRA', 'Jenkins', 'SVN', 'Azure Pipelines', 'TwinCAT', 'Hyper-V'],
  },
  {
    role: 'Operator',
    company: 'Valmet Automotive EV Power Oy',
    location: 'Salo, Finland',
    period: 'Nov 2021 – Dec 2022',
    bullets: [
      'Operated semi-automatic manufacturing machines in an EV battery production environment.',
      'Ensured product quality at multiple stages of the manufacturing process.',
    ],
    stack: [],
  },
  {
    role: 'Electrical Maintenance Engineer',
    company: 'Technocraft Bangladesh Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Mar 2014 – Jun 2016',
    bullets: [
      'Installed and maintained electrical equipment in an industrial setting.',
    ],
    stack: [],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <FadeIn>
          <SectionHeader label="Where I've Worked" title="Work Experience" />
        </FadeIn>
        <div className="timeline">
          {JOBS.map((job, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p className="timeline-content__role">{job.role}</p>
                  <p className="timeline-content__company">
                    {job.company}
                    {job.note && <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}> — {job.note}</span>}
                  </p>
                  <p className="timeline-content__meta">{job.location} · {job.period}</p>
                  <ul className="timeline-content__bullets">
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  {job.stack.length > 0 && (
                    <div className="timeline-content__chips">
                      {job.stack.map(s => <span key={s} className="chip">{s}</span>)}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
