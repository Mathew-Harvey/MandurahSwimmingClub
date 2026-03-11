import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import data from '../../content/news.json'

export default function News() {
  const posts = data.posts as { title: string; date: string; summary: string; body?: string; image?: string }[]

  if (!posts || posts.length === 0) {
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
          {posts
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((post, i) => (
              <AnimateIn key={`${post.date}-${post.title}`} type="fade-up" delay={i * 60}>
                <article className="news-card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--gray-200)', borderRadius: '0.5rem' }}>
                  {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '0.375rem', marginBottom: '1rem' }} />}
                  <h2 style={{ marginBottom: '0.25rem' }}>{post.title}</h2>
                  <p style={{ color: 'var(--gray)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{post.date}</p>
                  <p>{post.summary}</p>
                  {post.body && <div className="prose" style={{ marginTop: '0.75rem' }} dangerouslySetInnerHTML={{ __html: post.body }} />}
                </article>
              </AnimateIn>
            ))}
        </div>
      </section>
    </>
  )
}
