import AnimateIn from '../components/AnimateIn'
import data from '../../content/squads.json'

export default function Squads() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Squads & Training Schedule</h1>
          <p>Get Swimming</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="prose" style={{ marginBottom: '2rem' }}>
              <p>{data.intro}</p>
            </div>
          </AnimateIn>
          {data.squads.map((squad, i) => (
            <AnimateIn key={squad.name} type="fade-up" delay={i * 50}>
              <div className="squad-card">
                <h2>{squad.name} Squad</h2>
                <p><strong>Level:</strong> {squad.level}{squad.age ? ` \u00b7 Age: ${squad.age}` : ''}</p>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Day</th><th>Type</th><th>Time</th></tr>
                    </thead>
                    <tbody>
                      {squad.schedule.map((row, j) => (
                        <tr key={j}><td>{row.day}</td><td>{row.type}</td><td>{row.time}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  )
}
