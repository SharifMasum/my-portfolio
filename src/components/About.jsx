import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <FadeIn>
          <SectionHeader label="Who I Am" title="About Me" />
        </FadeIn>
        <div className="about__body">
          <FadeIn delay={100}>
            <p>
              I'm a Software Engineer based in Finland with a background spanning full-stack development,
              research software, industrial systems, and human-centered design. I hold two Master's degrees —
              one in Full-Stack Software Development from JAMK University of Applied Sciences and one in
              Human Technology Interaction from Tampere University — which gives me a rare combination of
              deep engineering skills and genuine empathy for the end user.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p>
              I've built RESTful APIs, contributed to EU-funded research software, worked within agile
              cross-functional teams, and shipped features in complex industrial environments. I'm comfortable
              across the full stack — from React frontends to Java and Node.js backends, Docker deployments,
              and cloud infrastructure on AWS.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p>
              I care about writing clean, maintainable code and building software that actually works for the
              people using it. I'm actively looking for full-stack or backend software engineering roles where
              I can keep growing and contribute to meaningful products.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
