import { useEffect } from 'react'

export default function Admin() {
  useEffect(() => {
    window.location.href = '/admin/'
  }, [])

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Content Manager</h1>
          <p>Redirecting to CMS...</p>
        </div>
      </header>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p>If you are not redirected, <a href="/admin/">click here to open the CMS</a>.</p>
        </div>
      </section>
    </>
  )
}
