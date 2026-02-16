import { Link } from 'react-router-dom'

const platinum = [{ name: 'Coastal Realty WA', logo: 'coastal-realty-logo.jpg', ext: 'jpg', phone: '0421 963 426', address: 'Shop 5a - 2 Redwood Avenue, Karnup, WA', facebook: 'https://www.facebook.com/CoastalRealtyWA' }]

const gold = [
  { name: 'Swimtek', logo: 'swimtek-logo.png', ext: 'png', phone: '0415 123 384', address: '54A Angove St, North Perth WA 6006' },
  { name: 'City of Mandurah', logo: 'city-of-mandurah-logo.png', ext: 'png', phone: '9550 3777', address: '3 Peel St, Mandurah, Western Australia 6210' },
]

const silver = [
  { name: 'AMD Chartered Accountants Mandurah', logo: 'amd-logo.jpg', ext: 'jpg', web: 'http://www.thomascontracting.net.au/' },
  { name: 'BDR Business', logo: 'bdr-business-logo.jpg', ext: 'jpg', web: 'https://www.bdrbusiness.com.au/' },
  { name: 'Mandurah Steak House', logo: 'mandurah-steak-house.png', ext: 'png' },
]

const bronze = [
  { name: 'Madison Builders', logo: 'madison-builders.jpg', ext: 'jpg', web: 'http://madisonbuilders.com.au/', facebook: 'https://www.facebook.com/madisonbuildersau/' },
  { name: 'Peel Garage Doors', logo: 'peel-garage-doors.jpg', ext: 'jpg', facebook: 'https://www.facebook.com/peelgaragedoors' },
  { name: 'Mandurah Graphics', logo: 'mandurah-graphics.jpg', ext: 'jpg' },
  { name: 'Rewind Skin & Laser Centre', logo: 'rewind-skin-laser.jpg', ext: 'jpg' },
]

function SponsorCard({ s, tier }: { s: { name: string; logo: string; ext: string; phone?: string; address?: string; web?: string; facebook?: string }; tier: string }) {
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
          <h2>Platinum Sponsor</h2>
          <div className="sponsor-grid sponsor-grid--platinum">
            {platinum.map((s) => (
              <SponsorCard key={s.name} s={s} tier="platinum" />
            ))}
          </div>
          <h2>Gold Sponsors</h2>
          <div className="sponsor-grid">
            {gold.map((s) => (
              <SponsorCard key={s.name} s={s} tier="gold" />
            ))}
          </div>
          <h2>Silver Sponsors</h2>
          <div className="sponsor-grid">
            {silver.map((s) => (
              <SponsorCard key={s.name} s={s} tier="silver" />
            ))}
          </div>
          <h2>Bronze Sponsors</h2>
          <div className="sponsor-grid">
            {bronze.map((s) => (
              <SponsorCard key={s.name} s={s} tier="bronze" />
            ))}
          </div>
          <p className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn--primary">Want to be a sponsor? Contact us</Link>
          </p>
        </div>
      </section>
    </>
  )
}
