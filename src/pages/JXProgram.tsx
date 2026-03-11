import AnimateIn from '../components/AnimateIn'
import data from '../../content/jx-program.json'

export default function JXProgram() {
  const tiers = [
    { key: 'gold' as const, label: 'Gold' },
    { key: 'silver' as const, label: 'Silver' },
    { key: 'bronze' as const, label: 'Bronze' },
    { key: 'blue' as const, label: 'Blue' },
  ]

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Junior Excellence (JX) Program</h1>
          <p>{data.season}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <img src={`${import.meta.env.BASE_URL}${data.image}`} alt="Junior Phoenix" className="page-featured-img" style={{ maxWidth: '480px', marginBottom: '1.5rem' }} />
          </AnimateIn>
          <AnimateIn type="fade-up" delay={80}>
            <div className="prose">
              <p>{data.intro}</p>
              <p>{data.qualifyNote} <a href={data.qualifyUrl} target="_blank" rel="noopener noreferrer">Swimming Australia – JX qualifying times</a>.</p>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={160}>
            <h2>{data.season} Results</h2>
            <div className="jx-results">
              {tiers.map(({ key, label }) => {
                const names = data[key] as string[]
                if (!names || names.length === 0) return null
                return (
                  <div className="jx-tier" key={key}>
                    <h3>{label}</h3>
                    <ul>{names.map((n) => <li key={n}>{n}</li>)}</ul>
                  </div>
                )
              })}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
