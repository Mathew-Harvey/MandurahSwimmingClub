import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'

export default function News() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club News</h1>
          <p>Latest updates</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
              </svg>
              <p style={{ color: 'var(--gray)', fontSize: '1.0625rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                News and updates will be posted here. Check back soon or follow us on social media for the latest.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://www.facebook.com/mandurahswimclub/" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--pill">Facebook</a>
                <a href="https://www.instagram.com/mandurahswimmingclub/" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--pill">Instagram</a>
                <Link to="/contact" className="btn btn--primary btn--pill">Contact Us</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
