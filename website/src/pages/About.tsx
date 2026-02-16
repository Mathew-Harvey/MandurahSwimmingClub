import { Link } from 'react-router-dom'

const JOIN_URL = 'https://www.myswimresults.com.au/MembershipNewRegistration.aspx?ClubID=36'

export default function About() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Mandurah's leading swimming club since 1967</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <img src="/images/about-us/team-photo.jpg" alt="Mandurah Swimming Club team" className="page-featured-img" />
              <h2>Mandurah Swimming Club</h2>
              <p>
                The Mandurah Swimming Club continues to be a competitive swimming club attending major swim meets throughout Western Australia. Our aim is to develop and assist each swimmer to reach their full potential both in and out of the pool.
              </p>
              <p>
                The Head Coach and our team of coaches provide programs enabling swimmers to develop skills, teach discipline and provide an environment in which swimmers can safely and happily enjoy their swimming.
              </p>
              <p>
                <a href={JOIN_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">Become A Member</a>
                {' '}
                <Link to="/contact" className="btn btn--outline">Contact Us</Link>
              </p>
            </div>
            <aside className="content-sidebar">
              <nav className="sub-nav">
                <Link to="/about/committee">Club Committee</Link>
                <Link to="/about/coaches">Club Coaches</Link>
                <Link to="/about/captains">Club Captains</Link>
                <Link to="/about/fuel-to-go">Fuel to Go & Play</Link>
                <Link to="/about/training-facilities">Training Facilities</Link>
                <Link to="/about/integrity">Integrity, Policies & Rules</Link>
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
