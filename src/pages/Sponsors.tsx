import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import data from '../../content/sponsors.json'

type Sponsor = { name: string; logo: string; phone?: string; address?: string; web?: string; facebook?: string }

function SponsorCard({ s, tier }: { s: Sponsor; tier: string }) {
  return (
    <div className={`sponsor-card sponsor-card--${tier}`}>
      <img src={`/images/sponsors/${s.logo}`} alt={s.name} />
      <h3>{s.name}</h3>
      {s.phone && <p>{s.phone}</p>}
      {s.address && <p>{s.address}</p>}
      {s.web && <a href={s.web} target="_blank" rel="noopener noreferrer">Website</a>}
      {s.facebook && <a href={s.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
    </div>
  )
}

const tiers = [
  { key: 'platinum' as const, label: 'Platinum Sponsor' },
  { key: 'gold' as const, label: 'Gold Sponsors' },
  { key: 'silver' as const, label: 'Silver Sponsors' },
  { key: 'bronze' as const, label: 'Bronze Sponsors' },
]

export default function Sponsors() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Sponsors</h1>
          <p>Thank you to our supporters</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          {tiers.map(({ key, label }, i) => {
            const list = data[key] as Sponsor[]
            if (!list || list.length === 0) return null
            return (
              <AnimateIn key={key} type="fade-up" delay={i * 80}>
                <h2>{label}</h2>
                <div className={`sponsor-grid${key === 'platinum' ? ' sponsor-grid--platinum' : ''}`}>
                  {list.map((s) => (
                    <SponsorCard key={s.name} s={s} tier={key} />
                  ))}
                </div>
              </AnimateIn>
            )
          })}
          <AnimateIn type="fade-up">
            <p className="text-center" style={{ marginTop: '2rem' }}>
              <Link to="/contact" className="btn btn--primary btn--pill">Want to be a sponsor? Contact us</Link>
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
