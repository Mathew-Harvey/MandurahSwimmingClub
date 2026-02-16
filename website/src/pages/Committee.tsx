import { Link } from 'react-router-dom'

const contacts = [
  { role: 'President', name: 'Samantha Maley', email: 'president@mandurahswimmingclub.com.au' },
  { role: 'Vice President', name: 'John McRae', email: 'vicepresident@mandurahswimmingclub.com.au' },
  { role: 'Secretary', name: 'Kelli Thomson', email: 'secretary@mandurahswimmingclub.com.au' },
  { role: 'Treasurer', name: 'Tamara Vreeken', email: 'treasurer@mandurahswimmingclub.com.au' },
  { role: 'Registrar', name: 'Natasha Fernandes', email: 'registrar@mandurahswimmingclub.com.au' },
]

const general = [
  { role: 'Club Recorder / Time Trial Coordinator', name: 'Karen Davies', email: 'recorder@mandurahswimmingclub.com.au' },
  { role: 'Fundraising Coordinator', name: 'Tammy Gilbert & Warren Haugh', email: 'fundraising@mandurahswimmingclub.com.au' },
  { role: 'Event Coordinator', name: 'Orla Brennan' },
  { role: 'Meet Recorder', name: 'Karl Roots' },
  { role: 'South West Regional Representative', name: 'Karen Davies' },
  { role: 'Social Media Officer', name: 'Samantha Maley' },
  { role: 'Website Officer', name: 'Damien & Luana Rahe', email: 'website@mandurahswimmingclub.com.au' },
  { role: 'Grants Officer', name: 'Brett Snowdon' },
  { role: 'MPIO', name: 'Laurence Davies' },
  { role: 'Marketing Coordinator', name: 'Orla Brennan & Natasha Fernandes' },
  { role: 'Uniform Coordinator', name: 'Kellie Shirra & Tamara Vreeken', email: 'uniforms@mandurahswimmingclub.com.au' },
]

export default function Committee() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Committee</h1>
          <p>2025/26 Committee</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> → Club Committee
          </p>
          <h2>Office Bearers</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((row) => (
                  <tr key={row.role}>
                    <td>{row.role}</td>
                    <td>{row.name}</td>
                    <td>{row.email ? <a href={`mailto:${row.email}`}>{row.email}</a> : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>General Committee</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {general.map((row) => (
                  <tr key={row.role}>
                    <td>{row.role}</td>
                    <td>{row.name}</td>
                    <td>{row.email ? <a href={`mailto:${row.email}`}>{row.email}</a> : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
