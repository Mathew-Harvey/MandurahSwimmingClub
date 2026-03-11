import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import './Home.css'
import data from '../../content/home.json'

export default function Home() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="hero">
        <img src={`${import.meta.env.BASE_URL}${data.hero.image}`} alt="Aerial view of Mandurah Aquatic pool" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="hero-eyebrow">
            <span className="dot" />
            {data.hero.eyebrow}
          </span>
          <h1>{data.hero.heading}</h1>
          <p className="hero-tagline">{data.hero.tagline}</p>
          <p className="hero-desc">{data.hero.description}</p>
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
              {data.stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ---- Promo Banner ---- */}
      <section className="promo-banner">
        <div className="container">
          <AnimateIn type="scale">
            <img src={`${import.meta.env.BASE_URL}${data.promoBanner.image}`} alt={data.promoBanner.alt} className="promo-img" />
          </AnimateIn>
        </div>
      </section>

      {/* ---- About Preview ---- */}
      <section className="section section--dark about-preview">
        <div className="container grid-2">
          <AnimateIn type="fade-right">
            <div>
              <div className="gradient-line" />
              <h2>{data.aboutPreview.heading}</h2>
              <p className="lead">{data.aboutPreview.lead}</p>
              {data.aboutPreview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="btn-group">
                <a href={data.aboutPreview.joinUrl} className="btn btn--primary btn--pill" target="_blank" rel="noopener noreferrer">Become A Member</a>
                <Link to="/contact" className="btn btn--outline btn--outline-light btn--pill">Contact Us</Link>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-left" delay={150}>
            <div className="about-preview-img">
              <img src={`${import.meta.env.BASE_URL}${data.aboutPreview.image}`} alt="Swimmer" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ---- 2 Week Trial CTA ---- */}
      <section className="section trial-cta">
        <div className="container text-center">
          <AnimateIn type="fade-up">
            <h2>{data.trial.heading}</h2>
            <p className="trial-subtitle">{data.trial.subtitle}</p>
            <Link to="/contact" className="btn btn--primary btn--lg">{data.trial.ctaText}</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ---- Coaches Preview ---- */}
      <section className="section coaches-preview">
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="text-center">
              <div className="gradient-line gradient-line--center" />
              <h2>{data.coachesPreview.heading}</h2>
            </div>
            <p className="coaches-intro text-center">{data.coachesPreview.intro}</p>
          </AnimateIn>
          <div className="coach-cards">
            {data.coachesPreview.featured.map((id, i) => (
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
            <p className="lead">{data.vision}</p>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <h2>Our Mission</h2>
            <p className="lead">{data.mission}</p>
            <p className="tagline">{data.tagline}</p>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
