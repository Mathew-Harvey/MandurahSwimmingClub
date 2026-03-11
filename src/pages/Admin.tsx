import { useState } from 'react'

const ADMIN_USER = 'admin'
const ADMIN_PASS = 'admin'

export default function Admin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      window.location.href = '/admin/'
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Admin Login</h1>
          <p>Content Management System</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label>
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  autoFocus
                  required
                  style={{ display: 'block', width: '100%', padding: '0.625rem', marginTop: '0.25rem', border: '1px solid var(--gray-200)', borderRadius: '0.375rem', fontSize: '1rem' }}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  style={{ display: 'block', width: '100%', padding: '0.625rem', marginTop: '0.25rem', border: '1px solid var(--gray-200)', borderRadius: '0.375rem', fontSize: '1rem' }}
                />
              </label>
              {error && <p style={{ color: '#dc2626', margin: 0 }}>{error}</p>}
              <button type="submit" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
