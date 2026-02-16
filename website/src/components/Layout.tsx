import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const JOIN_URL = 'https://www.myswimresults.com.au/MembershipNewRegistration.aspx?ClubID=36'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLink = (to: string, label: string) => {
    const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
    return (
      <Link to={to} className={`nav-link ${active ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
        {label}
      </Link>
    )
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner container">
          <Link to="/" className="logo-wrap" onClick={() => setMenuOpen(false)}>
            <img src="/images/global/club-logo-white.png" alt="Mandurah Swimming Club" className="logo" />
          </Link>
          <p className="header-cta">
            Would you like to join our swimming club?
          </p>
          <div className="header-actions">
            <a href={JOIN_URL} className="btn btn--white" target="_blank" rel="noopener noreferrer">Join Us</a>
            <a href={JOIN_URL} className="btn btn--outline btn--outline-white" target="_blank" rel="noopener noreferrer">Renew</a>
          </div>
          <button type="button" className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <div className="container nav-grid">
            <div className="nav-group">
              <span className="nav-group-label">Home</span>
              {navLink('/', 'Home')}
            </div>
            <div className="nav-group">
              <span className="nav-group-label">About Us</span>
              {navLink('/about', 'About Us')}
              {navLink('/about/committee', 'Club Committee')}
              {navLink('/about/coaches', 'Club Coaches')}
              {navLink('/about/captains', 'Club Captains')}
              {navLink('/about/fuel-to-go', 'Fuel to Go & Play')}
              {navLink('/about/training-facilities', 'Training Facilities')}
              {navLink('/about/integrity', 'Integrity, Policies & Rules')}
            </div>
            <div className="nav-group">
              <span className="nav-group-label">Get Swimming</span>
              {navLink('/squads', 'Squads & Training Schedule')}
              {navLink('/fees', 'Fees')}
              {navLink('/club-nights', 'Club Nights')}
              {navLink('/championships', 'Club Championships')}
              {navLink('/target-meets', 'Club Target Meets')}
              {navLink('/uniform', 'Club Uniform')}
              {navLink('/jx-program', 'Junior Excellence (JX)')}
            </div>
            <div className="nav-group">
              {navLink('/calendar', 'Club Calendar')}
              {navLink('/news', 'Club News')}
            </div>
            <div className="nav-group">
              <span className="nav-group-label">Support Our Club</span>
              {navLink('/sponsors', 'Sponsors')}
              {navLink('/donate', 'Make a Donation')}
            </div>
            <div className="nav-group">
              {navLink('/contact', 'Contact Us')}
              {navLink('/country-pennants', 'Country Pennants 2025')}
            </div>
          </div>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-social">
            <a href="https://www.facebook.com/mandurahswimclub/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/images/global/facebook-icon.png" alt="" width="32" height="32" />
            </a>
            <a href="https://www.instagram.com/mandurahswimmingclub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/images/global/instagram-icon.png" alt="" width="32" height="32" />
            </a>
          </div>
          <p className="footer-tagline">Driven by PASSION | Powered by BELIEF | Achieving SUCCESS</p>
          <p className="footer-links">
            <a href="https://www.swimming.org.au/" target="_blank" rel="noopener noreferrer">Swimming Australia</a>
            {' · '}
            <a href="https://wa.swimming.org.au/" target="_blank" rel="noopener noreferrer">Swimming WA</a>
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} Mandurah Swimming Club</p>
          <p className="footer-sponsor">Website Sponsored By: Coastal Realty WA</p>
          <p className="footer-ack">
            Mandurah Swimming Club acknowledges and pays respect to the Bindjareb People, who are the Traditional Owners and First Peoples of this land. We pay our respect to the Elders past and present and acknowledge the continuing contribution they make to the life of this City and region.
          </p>
        </div>
      </footer>
    </>
  )
}
