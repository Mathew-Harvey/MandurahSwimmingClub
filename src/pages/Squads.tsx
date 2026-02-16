import AnimateIn from '../components/AnimateIn'

const squads = [
  { name: 'Purple | Blue', level: 'Junior Introductory', age: '7+', schedule: [{ day: 'Monday', type: 'Dryland/Pool', time: '16:00 - 18:00' }, { day: 'Wednesday', type: 'Dryland/Pool', time: '16:00 - 18:00' }, { day: 'Saturday', type: 'Pool', time: '8:30 - 10:00' }] },
  { name: 'Green', level: 'Junior Intermediate', age: null, schedule: [{ day: 'Monday', type: 'Dryland/Pool', time: '6:00 - 7:30' }, { day: 'Wednesday', type: 'Dryland/Pool', time: '6:00 - 7:30' }, { day: 'Thursday', type: 'Dryland/Pool', time: '6:00 - 7:30' }, { day: 'Friday', type: 'Pool', time: '18:00 - 19:00' }] },
  { name: 'Yellow', level: 'Junior Intermediate', age: '9+', schedule: [{ day: 'Tuesday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Thursday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Thursday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Saturday', type: 'Pool', time: '8:30 - 10:30' }] },
  { name: 'Orange', level: 'Intermediate/Advanced', age: '10+', schedule: [{ day: 'Tuesday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Thursday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Thursday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Friday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Saturday', type: 'Pool', time: '8:30 - 10:30' }] },
  { name: 'Red', level: 'Advanced', age: '12+', schedule: [{ day: 'Tuesday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Thursday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Thursday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Friday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Saturday', type: 'Pool', time: '6:30 - 8:30' }] },
  { name: 'Black', level: 'Advanced', age: '13+', schedule: [{ day: 'Monday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Tuesday', type: 'Pool', time: '5:30 - 7:30' }, { day: 'Wednesday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Wednesday', type: 'Pool', time: '17:45 - 19:45' }, { day: 'Friday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Friday', type: 'Pool', time: '16:00 - 18:00' }, { day: 'Saturday', type: 'Pool', time: '6:30 - 8:30' }] },
  { name: 'Fitness', level: 'Fitness', age: '13+', schedule: [{ day: 'Monday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Tuesday', type: 'Pool', time: '5:30 - 7:30' }, { day: 'Wednesday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Wednesday', type: 'Pool', time: '17:45 - 19:45' }, { day: 'Friday', type: 'Dryland/Pool', time: '5:30 - 7:30' }, { day: 'Friday', type: 'Pool', time: '17:45 - 19:45' }, { day: 'Saturday', type: 'Pool', time: '6:30 - 8:30' }] },
]

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
              <p>All swimmers must have a Swimming WA (SWA) membership. For squad criteria and equipment details, see the full schedule below.</p>
            </div>
          </AnimateIn>
          {squads.map((squad, i) => (
            <AnimateIn key={squad.name} type="fade-up" delay={i * 50}>
              <div className="squad-card">
                <h2>{squad.name} Squad</h2>
                <p><strong>Level:</strong> {squad.level}{squad.age ? ` \u00b7 Age: ${squad.age}` : ''}</p>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Type</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {squad.schedule.map((row, j) => (
                        <tr key={j}>
                          <td>{row.day}</td>
                          <td>{row.type}</td>
                          <td>{row.time}</td>
                        </tr>
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
