import { useState, useEffect } from 'react'
import './Calendar.css'

const STORAGE_KEY = 'msc_calendar_events'
const ADMIN_KEY = 'msc_calendar_admin'

// Set VITE_CALENDAR_ADMIN_PASSWORD in .env (see .env.example)
const DEFAULT_ADMIN_PASSWORD = import.meta.env.VITE_CALENDAR_ADMIN_PASSWORD ?? ''

export interface CalendarEvent {
  id: string
  title: string
  date: string
  time?: string
  description?: string
}

function loadEvents(): CalendarEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveEvents(events: CalendarEvent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
}

function isAdmin(): boolean {
  return localStorage.getItem(ADMIN_KEY) === '1'
}

function setAdminSession(active: boolean) {
  if (active) localStorage.setItem(ADMIN_KEY, '1')
  else localStorage.removeItem(ADMIN_KEY)
}

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>(loadEvents)
  const [adminLoggedIn, setAdminLoggedIn] = useState(isAdmin())
  const [showLogin, setShowLogin] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newTime, setNewTime] = useState('')
  const [newDesc, setNewDesc] = useState('')

  useEffect(() => {
    saveEvents(events)
  }, [events])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    if (password === DEFAULT_ADMIN_PASSWORD) {
      setAdminSession(true)
      setAdminLoggedIn(true)
      setShowLogin(false)
      setPassword('')
    } else {
      setLoginError('Incorrect password.')
    }
  }

  const handleLogout = () => {
    setAdminSession(false)
    setAdminLoggedIn(false)
    setShowAddForm(false)
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim() || !newDate.trim()) return
    const event: CalendarEvent = {
      id: crypto.randomUUID(),
      title: newTitle.trim(),
      date: newDate,
      time: newTime.trim() || undefined,
      description: newDesc.trim() || undefined,
    }
    setEvents((prev) => [...prev, event].sort((a, b) => a.date.localeCompare(b.date) || (a.time || '').localeCompare(b.time || '')))
    setNewTitle('')
    setNewDate('')
    setNewTime('')
    setNewDesc('')
    setShowAddForm(false)
  }

  const handleDelete = (id: string) => {
    if (confirm('Delete this event?')) setEvents((prev) => prev.filter((e) => e.id !== id))
  }

  const today = new Date().toISOString().slice(0, 10)
  const upcoming = events.filter((e) => e.date >= today)
  const past = events.filter((e) => e.date < today)

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Calendar</h1>
          <p>Upcoming events</p>
          <div className="calendar-admin-actions">
            {!adminLoggedIn ? (
              <button type="button" className="btn btn--white" onClick={() => setShowLogin(true)}>
                Admin Login
              </button>
            ) : (
              <>
                <button type="button" className="btn btn--primary" onClick={() => setShowAddForm(true)}>
                  Add Event
                </button>
                <button type="button" className="btn btn--outline btn--outline-light" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <section className="section">
        <div className="container">
          {showLogin && (
            <div className="modal-overlay" onClick={() => setShowLogin(false)}>
              <div className="modal calendar-login-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Calendar Admin</h2>
                <form onSubmit={handleLogin}>
                  <label>
                    Password
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      autoFocus
                    />
                  </label>
                  {loginError && <p className="form-error">{loginError}</p>}
                  <div className="form-actions">
                    <button type="submit" className="btn btn--primary">Login</button>
                    <button type="button" className="btn btn--outline" onClick={() => setShowLogin(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {showAddForm && adminLoggedIn && (
            <div className="modal-overlay" onClick={() => setShowAddForm(false)}>
              <div className="modal calendar-add-modal" onClick={(e) => e.stopPropagation()}>
                <h2>Add Event</h2>
                <form onSubmit={handleAddEvent}>
                  <label>
                    Title *
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      required
                      placeholder="e.g. Club Night"
                    />
                  </label>
                  <label>
                    Date *
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      required
                    />
                  </label>
                  <label>
                    Time (optional)
                    <input
                      type="text"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      placeholder="e.g. 6:00 PM"
                    />
                  </label>
                  <label>
                    Description (optional)
                    <textarea
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Details..."
                      rows={3}
                    />
                  </label>
                  <div className="form-actions">
                    <button type="submit" className="btn btn--primary">Add Event</button>
                    <button type="button" className="btn btn--outline" onClick={() => setShowAddForm(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {events.length === 0 && (
            <p className="calendar-empty">No events yet. Admins can log in and add events.</p>
          )}

          {upcoming.length > 0 && (
            <>
              <h2>Upcoming</h2>
              <ul className="calendar-list">
                {upcoming.map((event) => (
                  <li key={event.id} className="calendar-event">
                    <div>
                      <strong>{event.title}</strong>
                      <span className="calendar-meta">
                        {event.date}
                        {event.time && ` · ${event.time}`}
                      </span>
                      {event.description && <p className="calendar-desc">{event.description}</p>}
                    </div>
                    {adminLoggedIn && (
                      <button type="button" className="btn btn--small btn--outline" onClick={() => handleDelete(event.id)}>Delete</button>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {past.length > 0 && (
            <>
              <h2>Past</h2>
              <ul className="calendar-list calendar-list-past">
                {past.map((event) => (
                  <li key={event.id} className="calendar-event">
                    <div>
                      <strong>{event.title}</strong>
                      <span className="calendar-meta">
                        {event.date}
                        {event.time && ` · ${event.time}`}
                      </span>
                    </div>
                    {adminLoggedIn && (
                      <button type="button" className="btn btn--small btn--outline" onClick={() => handleDelete(event.id)}>Delete</button>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </>
  )
}
