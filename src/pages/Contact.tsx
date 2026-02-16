import { useState } from 'react'
import AnimateIn from '../components/AnimateIn'

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || ''

const contacts = [
  { role: 'President', name: 'Samantha Maley', email: 'president@mandurahswimmingclub.com.au' },
  { role: 'Vice President', name: 'John McRae', email: 'vicepresident@mandurahswimmingclub.com.au' },
  { role: 'Registrar', name: 'Natasha Fernandes', email: 'registrar@mandurahswimmingclub.com.au' },
  { role: 'Secretary', name: 'Kelli Thomson', email: 'secretary@mandurahswimmingclub.com.au' },
  { role: 'Treasurer', name: 'Tamara Vreeken', email: 'treasurer@mandurahswimmingclub.com.au' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch</p>
        </div>
      </header>
      <section className="section">
        <div className="container contact-grid">
          <AnimateIn type="fade-right">
            <div className="contact-form-wrap">
              <h2>Send a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  First name *
                  <input type="text" name="firstName" required placeholder="Your first name" />
                </label>
                <label>
                  Last name *
                  <input type="text" name="lastName" required placeholder="Your last name" />
                </label>
                <label>
                  Email *
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="Optional" />
                </label>
                <label>
                  Message *
                  <textarea name="message" rows={5} required placeholder="Leave us a message..." />
                </label>
                {!FORM_ENDPOINT && <p className="form-error">Contact form is not configured. Set VITE_CONTACT_FORM_ENDPOINT in .env (see .env.example). Meanwhile, use the email addresses below.</p>}
                {status === 'success' && <p className="form-success">Thanks! Your message has been sent.</p>}
                {status === 'error' && FORM_ENDPOINT && <p className="form-error">Something went wrong. Please try again or email us directly.</p>}
                <button type="submit" className="btn btn--primary btn--pill" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-left" delay={100}>
            <div className="contact-details">
              <h2>Key contacts</h2>
              <ul className="contact-list">
                {contacts.map((c) => (
                  <li key={c.role}>
                    <strong>{c.role}</strong> &ndash; {c.name}
                    <br />
                    <a href={`mailto:${c.email}`}>{c.email}</a>
                  </li>
                ))}
              </ul>
              <h2>Visit us</h2>
              <p>
                Mandurah Aquatic and Recreation Centre<br />
                303 Pinjarra Road<br />
                Mandurah WA 6210
              </p>
              <h2>Postal address</h2>
              <p>
                PO Box 216<br />
                Mandurah WA 6210
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
