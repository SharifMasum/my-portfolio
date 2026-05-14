export default function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
