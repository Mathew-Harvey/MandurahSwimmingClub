import { Link } from 'react-router-dom'
import './Home.css'

const JOIN_URL = 'https://www.myswimresults.com.au/MembershipNewRegistration.aspx?ClubID=36'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src="/images/home/aerial-pool-hero.jpg" alt="Aerial view of Mandurah Aquatic pool" className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1>Join Mandurah today!</h1>
          <p className="hero-tagline">Fitness, fun, lifestyle and community.</p>
          <p className="hero-desc">
            Mandurah Swimming Club can open up a world of possibilities for swimmers of all abilities. Whether you're just starting out, training more seriously, or looking for a way to compete, we're the perfect way to take your swimming to the next level.
          </p>
          <Link to="/contact" className="btn btn--primary">Contact Us</Link>
        </div>
      </section>

      <section className="section promo-banner">
        <div className="container">
          <img src="/images/home/country-pennants-banner.jpg" alt="Country Pennants 2025" className="promo-img" />
        </div>
      </section>

      <section className="section section--dark about-preview">
        <div className="container grid-2">
          <div>
            <h2>Mandurah Swimming Club</h2>
            <p className="lead">Mandurah's leading swimming club since 1967.</p>
            <p>
              The Mandurah Swimming Club continues to be a competitive swimming club attending major swim meets throughout Western Australia. Our aim is to develop and assist each swimmer to reach their full potential both in and out of the pool.
            </p>
            <p>
              The Head Coach and our team of coaches provide programs enabling swimmers to develop skills, teach discipline and provide an environment in which swimmers can safely and happily enjoy their swimming.
            </p>
            <div className="btn-group">
              <a href={JOIN_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">Become A Member</a>
              <Link to="/contact" className="btn btn--outline btn--outline-light">Contact Us</Link>
            </div>
          </div>
          <div className="about-preview-img">
            <img src="/images/home/swimmer-image.jpg" alt="Swimmer" />
          </div>
        </div>
      </section>

      <section className="section trial-cta">
        <div className="container text-center">
          <h2>2 Week Free Trial</h2>
          <Link to="/contact" className="btn btn--primary btn--lg">Book today</Link>
        </div>
      </section>

      <section className="section coaches-preview">
        <div className="container">
          <h2 className="text-center">Our Coaches</h2>
          <p className="coaches-intro text-center">
            Appointed Head Coach Hyojin "Sharky" Son leads our club with an impressive international coaching record. Our junior coaches Chelsea, Jemma, Charlotte, Sofia, Aiden and Kaiden bring experience and enthusiasm to every session.
          </p>
          <div className="coach-cards">
            {['coach-sharky', 'coach-chelsea', 'coach-jemma', 'coach-aiden', 'coach-kaiden'].map((id) => (
              <div key={id} className="coach-card">
                <img src={`/images/coaches/${id}.png`} alt="" />
                <span className="coach-name">
                  {id === 'coach-sharky' ? 'Sharky' : id.replace('coach-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center">
            <Link to="/about/coaches" className="btn btn--outline">Meet all coaches</Link>
          </p>
        </div>
      </section>

      <section className="section section--dark vision-mission">
        <div className="container text-center">
          <h2>Our Vision</h2>
          <p className="lead">
            To be a leading community swimming club that is inclusive of all individuals, that aims to inspire swimmers, has a strong ethos and balance of participation, success, and excellence.
          </p>
          <h2>Our Mission</h2>
          <p className="lead">
            To offer pathways for all swimmers to achieve their personal best in a safe, encouraging, and inclusive environment.
          </p>
          <p className="tagline">Driven by PASSION | Powered by BELIEF | Achieving SUCCESS</p>
        </div>
      </section>
    </>
  )
}
