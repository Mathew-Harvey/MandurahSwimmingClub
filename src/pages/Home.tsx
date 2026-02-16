import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import './Home.css'

const JOIN_URL = 'https://www.myswimresults.com.au/MembershipNewRegistration.aspx?ClubID=36'

export default function Home() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="hero">
        <img src={`${import.meta.env.BASE_URL}images/home/aerial-pool-hero.jpg`} alt="Aerial view of Mandurah Aquatic pool" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="hero-eyebrow">
            <span className="dot" />
            Est. 1967 — Mandurah, Western Australia
          </span>
          <h1>Dive into something extraordinary.</h1>
          <p className="hero-tagline">Fitness, fun, lifestyle and community.</p>
          <p className="hero-desc">
            Mandurah Swimming Club opens a world of possibilities for swimmers of all abilities. Whether you're starting out, training seriously, or looking to compete — we'll take your swimming to the next level.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn--primary">Get Started</Link>
            <Link to="/about" className="btn btn--outline-hero">Learn More</Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* ---- Stats Strip ---- */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="stats-strip">
              <div className="stat-item">
                <span className="stat-number">57+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7</span>
                <span className="stat-label">Training Squads</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7</span>
                <span className="stat-label">Dedicated Coaches</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Sessions / Week</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ---- Promo Banner ---- */}
      <section className="promo-banner">
        <div className="container">
          <AnimateIn type="scale">
            <img src={`${import.meta.env.BASE_URL}images/home/country-pennants-banner.jpg`} alt="Country Pennants 2025" className="promo-img" />
          </AnimateIn>
        </div>
      </section>

      {/* ---- About Preview ---- */}
      <section className="section section--dark about-preview">
        <div className="container grid-2">
          <AnimateIn type="fade-right">
            <div>
              <div className="gradient-line" />
              <h2>Mandurah Swimming Club</h2>
              <p className="lead">Mandurah's leading swimming club since 1967.</p>
              <p>
                The Mandurah Swimming Club continues to be a competitive swimming club attending major swim meets throughout Western Australia. Our aim is to develop and assist each swimmer to reach their full potential both in and out of the pool.
              </p>
              <p>
                The Head Coach and our team of coaches provide programs enabling swimmers to develop skills, teach discipline and provide an environment in which swimmers can safely and happily enjoy their swimming.
              </p>
              <div className="btn-group">
                <a href={JOIN_URL} className="btn btn--primary btn--pill" target="_blank" rel="noopener noreferrer">Become A Member</a>
                <Link to="/contact" className="btn btn--outline btn--outline-light btn--pill">Contact Us</Link>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-left" delay={150}>
            <div className="about-preview-img">
              <img src={`${import.meta.env.BASE_URL}images/home/swimmer-image.jpg`} alt="Swimmer" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ---- 2 Week Trial CTA ---- */}
      <section className="section trial-cta">
        <div className="container text-center">
          <AnimateIn type="fade-up">
            <h2>2 Week Free Trial</h2>
            <p className="trial-subtitle">Experience our world-class coaching and facilities with no commitment.</p>
            <Link to="/contact" className="btn btn--primary btn--lg">Book your trial today</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ---- Coaches Preview ---- */}
      <section className="section coaches-preview">
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="text-center">
              <div className="gradient-line gradient-line--center" />
              <h2>Our Coaches</h2>
            </div>
            <p className="coaches-intro text-center">
              Appointed Head Coach Hyojin "Sharky" Son leads our club with an impressive international coaching record. Our junior coaches Chelsea, Jemma, Charlotte, Sofia, Aiden and Kaiden bring experience and enthusiasm to every session.
            </p>
          </AnimateIn>
          <div className="coach-cards">
            {['coach-sharky', 'coach-chelsea', 'coach-jemma', 'coach-aiden', 'coach-kaiden'].map((id, i) => (
              <AnimateIn key={id} type="fade-up" delay={i * 80}>
                <div className="coach-card">
                  <img src={`/images/coaches/${id}.png`} alt="" />
                  <span className="coach-name">
                    {id === 'coach-sharky' ? 'Sharky' : id.replace('coach-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn type="fade-up">
            <p className="text-center">
              <Link to="/about/coaches" className="btn btn--outline btn--pill">Meet all coaches</Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ---- Vision & Mission ---- */}
      <section className="section section--dark vision-mission">
        <div className="container text-center">
          <AnimateIn type="fade-up">
            <div className="gradient-line gradient-line--center" />
            <h2>Our Vision</h2>
            <p className="lead">
              To be a leading community swimming club that is inclusive of all individuals, that aims to inspire swimmers, has a strong ethos and balance of participation, success, and excellence.
            </p>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <h2>Our Mission</h2>
            <p className="lead">
              To offer pathways for all swimmers to achieve their personal best in a safe, encouraging, and inclusive environment.
            </p>
            <p className="tagline">Driven by PASSION | Powered by BELIEF | Achieving SUCCESS</p>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
