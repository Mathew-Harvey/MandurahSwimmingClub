export default function Admin() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Content Manager</h1>
          <p>Manage news, events, sponsors and more</p>
        </div>
      </header>
      <section className="section">
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1rem' }}>

          {/* CTA button */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <a
              href="/admin/"
              style={{
                display: 'inline-block',
                background: '#0e7490',
                color: '#fff',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                fontSize: '1.125rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Open Content Manager
            </a>
            <p style={{ marginTop: '0.75rem', color: '#666', fontSize: '0.9rem' }}>
              You will be asked to sign in with your GitHub account.
            </p>
          </div>

          {/* Setup instructions */}
          <div
            style={{
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: '1.25rem', color: '#0e7490' }}>
              First Time? Here's How to Get Started
            </h2>
            <p style={{ lineHeight: 1.7 }}>
              The Content Manager uses <strong>GitHub</strong> (a free, secure platform) to save changes to the website.
              You only need to do this setup once.
            </p>

            <h3 style={{ fontSize: '1.1rem', color: '#0c4a6e' }}>Step 1 — Create a Free GitHub Account</h3>
            <ol style={{ lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              <li>
                Go to{' '}
                <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" style={{ color: '#0e7490', fontWeight: 600 }}>
                  github.com/signup
                </a>
              </li>
              <li>Enter your <strong>email address</strong> and click Continue</li>
              <li>Choose a <strong>password</strong> and a <strong>username</strong> (e.g. your name)</li>
              <li>Complete the verification and click <strong>"Create account"</strong></li>
              <li>Check your email and enter the <strong>confirmation code</strong></li>
            </ol>
            <p style={{ fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
              That's it — GitHub is completely free and you won't need to pay for anything.
            </p>

            <h3 style={{ fontSize: '1.1rem', color: '#0c4a6e' }}>Step 2 — Send Your Username to Mathew</h3>
            <p style={{ lineHeight: 1.7 }}>
              Once you've created your account, send your <strong>GitHub username</strong> to:
            </p>
            <div
              style={{
                background: '#fff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '1rem 1.5rem',
                textAlign: 'center',
                margin: '1rem 0',
              }}
            >
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.05rem' }}>Mathew Harvey</p>
              <p style={{ margin: '0.25rem 0 0', color: '#555' }}>
                Club Website Manager
              </p>
              <p style={{ margin: '0.5rem 0 0' }}>
                <a href="mailto:mharvey2@outlook.com" style={{ color: '#0e7490', fontWeight: 600 }}>
                  mharvey2@outlook.com
                </a>
              </p>
            </div>
            <p style={{ lineHeight: 1.7 }}>
              Mathew will add you as an editor — you'll receive an email invite from GitHub.
              <strong> Accept the invite</strong>, then you're all set.
            </p>

            <h3 style={{ fontSize: '1.1rem', color: '#0c4a6e' }}>Step 3 — Log In and Start Editing</h3>
            <ol style={{ lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              <li>Click the <strong>"Open Content Manager"</strong> button above</li>
              <li>Click <strong>"Login with GitHub"</strong></li>
              <li>If prompted, click <strong>"Authorize"</strong> to allow the website to connect</li>
              <li>You're in! Choose a section (News, Calendar, Sponsors, etc.) and start editing</li>
            </ol>
          </div>

          {/* FAQ / help */}
          <div
            style={{
              background: '#fefce8',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: '1.15rem', color: '#92400e' }}>
              Having Trouble?
            </h2>
            <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>
              <strong>I can't log in / I get an error:</strong><br />
              Make sure you've accepted the GitHub invite from Mathew. Check your email
              (including your spam/junk folder) for an invitation from GitHub.
            </p>
            <p style={{ lineHeight: 1.7, marginBottom: '0.5rem' }}>
              <strong>I've forgotten my GitHub password:</strong><br />
              Go to{' '}
              <a href="https://github.com/password_reset" target="_blank" rel="noopener noreferrer" style={{ color: '#92400e' }}>
                github.com/password_reset
              </a>{' '}
              and follow the steps to reset it.
            </p>
            <p style={{ lineHeight: 1.7, margin: 0 }}>
              <strong>Something else?</strong><br />
              Email{' '}
              <a href="mailto:mharvey2@outlook.com" style={{ color: '#92400e' }}>
                mharvey2@outlook.com
              </a>{' '}
              and Mathew will help you out.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
