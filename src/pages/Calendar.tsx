import './Calendar.css'
import data from '../../content/calendar.json'

interface CalendarEvent {
  title: string
  date: string
  time?: string
  description?: string
}

export default function Calendar() {
  const events = (Array.isArray(data.events) ? data.events as CalendarEvent[] : []).slice().sort(
    (a, b) => a.date.localeCompare(b.date) || (a.time || '').localeCompare(b.time || '')
  )

  const today = new Date().toISOString().slice(0, 10)
  const upcoming = events.filter((e) => e.date >= today)
  const past = events.filter((e) => e.date < today)

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Calendar</h1>
          <p>Upcoming events</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          {events.length === 0 && (
            <p className="calendar-empty">No events scheduled. Check back soon or follow us on social media for updates.</p>
          )}

          {upcoming.length > 0 && (
            <>
              <h2>Upcoming</h2>
              <ul className="calendar-list">
                {upcoming.map((event, i) => (
                  <li key={`${event.date}-${event.title}-${i}`} className="calendar-event">
                    <div>
                      <strong>{event.title}</strong>
                      <span className="calendar-meta">
                        {event.date}
                        {event.time && ` · ${event.time}`}
                      </span>
                      {event.description && <p className="calendar-desc">{event.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {past.length > 0 && (
            <>
              <h2>Past</h2>
              <ul className="calendar-list calendar-list-past">
                {past.map((event, i) => (
                  <li key={`${event.date}-${event.title}-${i}`} className="calendar-event">
                    <div>
                      <strong>{event.title}</strong>
                      <span className="calendar-meta">
                        {event.date}
                        {event.time && ` · ${event.time}`}
                      </span>
                    </div>
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
