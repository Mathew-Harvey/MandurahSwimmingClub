import { Link } from 'react-router-dom'

const captains = [
  { id: 'luke-mcdonough', name: 'Luke McDonough', role: 'Senior Club Captain' },
  { id: 'megan-maley', name: 'Megan Maley', role: 'Senior Club Captain' },
  { id: 'alexander-vreeken', name: 'Alexander Vreeken', role: 'Junior Club Captain' },
  { id: 'sadhbh-mcdonnell', name: 'Sadhbh McDonnell', role: 'Junior Club Captain' },
]

export default function Captains() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Captains</h1>
          <p>2025/2026 Season Captains</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> → Club Captains
          </p>
          <div className="prose">
            <p>
              Our Club Captains are appointed from nominations received from our club members. Two Club Captains are appointed for each swimming season; 1 Male and 1 Female Captain is preferred however it depends on the nominations received.
            </p>
            <p>
              The primary function of Club Captain is to facilitate communication between the swimmers and the Committee/Coaches, and to represent the swimmers in this regard. Club Captains need to be approachable and available to swimmers, so that their concerns can be raised.
            </p>
            <h2>Selection Criteria</h2>
            <ul>
              <li>Be a Mandurah Swimming Club member for the 2025/2026 season</li>
              <li>Regularly attend targeted meets</li>
              <li>Be willing to assist the club with organising events and fundraising</li>
              <li>Have an outgoing personality and excellent leadership skills</li>
              <li>Be willing to help out at carnivals, club nights and presentations</li>
              <li>Be ready to mentor and encourage junior swimmers</li>
              <li>Be encouraging and assist with creating an all-round club spirit</li>
            </ul>
          </div>
          <div className="captain-grid">
            {captains.map((c) => (
              <div key={c.id} className="captain-block">
                <img src={`/images/captains/${c.id}.png`} alt={c.name} />
                <h3>{c.name}</h3>
                <p>{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
