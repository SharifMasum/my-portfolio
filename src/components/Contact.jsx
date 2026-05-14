import { Mail, Linkedin, Github, MapPin } from 'lucide-react'
import FadeIn from './FadeIn'
import SectionHeader from './SectionHeader'

const LINKS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shariful.islam.mec@gmail.com',
    href: 'mailto:shariful.islam.mec@gmail.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'md-shariful-islam-97051011b',
    href: 'https://www.linkedin.com/in/md-shariful-islam-97051011b/',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'SharifMasum',
    href: 'https://github.com/SharifMasum',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Finland',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__inner">
          <FadeIn>
            <SectionHeader label="Get In Touch" title="Contact" />
            <p className="contact__intro">
              I'm open to new opportunities. Whether you have a role in mind or just want to connect —
              feel free to reach out.
            </p>
          </FadeIn>
          <div className="contact__links">
            {LINKS.map(({ icon, label, value, href }, i) => (
              <FadeIn key={label} delay={i * 80}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-link__icon">{icon}</span>
                    <span>
                      <p className="contact-link__label">{label}</p>
                      <p className="contact-link__value">{value}</p>
                    </span>
                  </a>
                ) : (
                  <div className="contact-link">
                    <span className="contact-link__icon">{icon}</span>
                    <span>
                      <p className="contact-link__label">{label}</p>
                      <p className="contact-link__value">{value}</p>
                    </span>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
