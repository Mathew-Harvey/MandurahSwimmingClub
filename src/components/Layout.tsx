import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollY } from '../hooks/useInView'
import './Layout.css'

const JOIN_URL = 'https://www.myswimresults.com.au/MembershipNewRegistration.aspx?ClubID=36'

interface DropdownItem {
  to: string
  label: string
}

const aboutLinks: DropdownItem[] = [
  { to: '/about', label: 'About Us' },
  { to: '/about/committee', label: 'Club Committee' },
  { to: '/about/coaches', label: 'Club Coaches' },
  { to: '/about/captains', label: 'Club Captains' },
  { to: '/about/fuel-to-go', label: 'Fuel to Go & Play' },
  { to: '/about/training-facilities', label: 'Training Facilities' },
  { to: '/about/integrity', label: 'Integrity & Policies' },
]

const swimmingLinks: DropdownItem[] = [
  { to: '/squads', label: 'Squads & Training' },
  { to: '/fees', label: 'Fees' },
  { to: '/club-nights', label: 'Club Nights' },
  { to: '/championships', label: 'Club Championships' },
  { to: '/target-meets', label: 'Target Meets' },
  { to: '/uniform', label: 'Club Uniform' },
  { to: '/jx-program', label: 'Junior Excellence (JX)' },
]

const supportLinks: DropdownItem[] = [
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/donate', label: 'Make a Donation' },
  { to: '/country-pennants', label: 'Country Pennants 2025' },
]

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 3.75L5 6.25L7.5 3.75" />
    </svg>
  )
}

function DropdownMenu({ label, items, isActive }: { label: string; items: DropdownItem[]; isActive: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleEnter = () => {
    clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div
      className={`dropdown ${open ? 'dropdown--open' : ''}`}
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        className={`top-nav-link dropdown-trigger ${isActive ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown />
      </button>
      <div className="dropdown-panel">
        <div className="dropdown-panel-inner">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="dropdown-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileAccordion({ label, items, location, onNavigate }: { label: string; items: DropdownItem[]; location: string; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`mob-accordion ${open ? 'mob-accordion--open' : ''}`}>
      <button type="button" className="mob-accordion-trigger" onClick={() => setOpen(!open)}>
        {label}
        <svg className="mob-accordion-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4.5L6 7.5L9 4.5" />
        </svg>
      </button>
      <div className="mob-accordion-panel">
        {items.map((item) => {
          const active = location === item.to || (item.to !== '/' && location.startsWith(item.to))
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`mob-nav-link ${active ? 'active' : ''}`}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const scrollY = useScrollY()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isAboutActive = location.pathname.startsWith('/about')
  const isSwimmingActive = ['/squads', '/fees', '/club-nights', '/championships', '/target-meets', '/uniform', '/jx-program'].some(p => location.pathname.startsWith(p))
  const isSupportActive = ['/sponsors', '/donate', '/country-pennants'].some(p => location.pathname.startsWith(p))

  return (
    <>
      <header className={`site-header ${scrollY > 20 ? 'scrolled' : ''}`}>
        <div className="header-inner container">
          <Link to="/" className="logo-wrap" onClick={() => setMenuOpen(false)}>
            <img src="/images/global/club-logo-white.png" alt="Mandurah Swimming Club" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to="/" className={`top-nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <DropdownMenu label="About Us" items={aboutLinks} isActive={isAboutActive} />
            <DropdownMenu label="Get Swimming" items={swimmingLinks} isActive={isSwimmingActive} />
            <Link to="/calendar" className={`top-nav-link ${location.pathname === '/calendar' ? 'active' : ''}`}>Calendar</Link>
            <Link to="/news" className={`top-nav-link ${location.pathname === '/news' ? 'active' : ''}`}>News</Link>
            <DropdownMenu label="Support" items={supportLinks} isActive={isSupportActive} />
            <Link to="/contact" className={`top-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </nav>

          <div className="header-actions">
            <a href={JOIN_URL} className="btn btn--white btn--pill" target="_blank" rel="noopener noreferrer">Join Us</a>
            <a href={JOIN_URL} className="btn btn--outline btn--outline-white btn--pill" target="_blank" rel="noopener noreferrer">Renew</a>
          </div>

          <button type="button" className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-nav-header">
          <img src="/images/global/club-logo-white.png" alt="Mandurah Swimming Club" className="mobile-nav-logo" />
          <button type="button" className="mobile-nav-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>
        <div className="mobile-nav-body">
          <Link to="/" className={`mob-nav-link mob-nav-top ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>

          <MobileAccordion label="About Us" items={aboutLinks} location={location.pathname} onNavigate={() => setMenuOpen(false)} />
          <MobileAccordion label="Get Swimming" items={swimmingLinks} location={location.pathname} onNavigate={() => setMenuOpen(false)} />

          <Link to="/calendar" className={`mob-nav-link mob-nav-top ${location.pathname === '/calendar' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Calendar</Link>
          <Link to="/news" className={`mob-nav-link mob-nav-top ${location.pathname === '/news' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>News</Link>

          <MobileAccordion label="Support" items={supportLinks} location={location.pathname} onNavigate={() => setMenuOpen(false)} />

          <Link to="/contact" className={`mob-nav-link mob-nav-top ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
        <div className="mobile-nav-footer">
          <a href={JOIN_URL} className="btn btn--primary btn--pill" style={{ width: '100%' }} target="_blank" rel="noopener noreferrer">Join Us</a>
          <a href={JOIN_URL} className="btn btn--outline btn--outline-white btn--pill" style={{ width: '100%' }} target="_blank" rel="noopener noreferrer">Renew Membership</a>
        </div>
      </nav>

      <main className="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="container footer-grid">
            <div className="footer-brand">
              <img src="/images/global/club-logo-white.png" alt="Mandurah Swimming Club" className="footer-logo" />
              <p className="footer-tagline">Driven by PASSION | Powered by BELIEF | Achieving SUCCESS</p>
              <p className="footer-desc">Mandurah's leading swimming club since 1967. Developing swimmers to reach their full potential both in and out of the pool.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link to="/about">About Us</Link>
              <Link to="/squads">Squads</Link>
              <Link to="/fees">Fees</Link>
              <Link to="/calendar">Calendar</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Get Involved</h4>
              <Link to="/sponsors">Sponsors</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/club-nights">Club Nights</Link>
              <a href={JOIN_URL} target="_blank" rel="noopener noreferrer">Join / Renew</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <div className="footer-social">
              <a href="https://www.facebook.com/mandurahswimclub/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/mandurahswimmingclub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
            <div className="footer-meta">
              <p className="footer-copy">&copy; {new Date().getFullYear()} Mandurah Swimming Club</p>
              <p className="footer-sponsor">Website Sponsored By: Coastal Realty WA</p>
            </div>
            <div className="footer-links-external">
              <a href="https://www.swimming.org.au/" target="_blank" rel="noopener noreferrer">Swimming Australia</a>
              <a href="https://wa.swimming.org.au/" target="_blank" rel="noopener noreferrer">Swimming WA</a>
            </div>
          </div>
        </div>
        <p className="footer-ack">
          Mandurah Swimming Club acknowledges and pays respect to the Bindjareb People, who are the Traditional Owners and First Peoples of this land. We pay our respect to the Elders past and present and acknowledge the continuing contribution they make to the life of this City and region.
        </p>
      </footer>
    </>
  )
}
