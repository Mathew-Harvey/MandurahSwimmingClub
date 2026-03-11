import AnimateIn from '../components/AnimateIn'
import data from '../../content/fees.json'

export default function Fees() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Fees</h1>
          <p>Membership and squad fees</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <AnimateIn type="fade-up">
                <img src={`${import.meta.env.BASE_URL}${data.image}`} alt="Swimming" className="page-featured-img" />
              </AnimateIn>
              <AnimateIn type="fade-up" delay={100}>
                <div className="prose">
                  <h2>{data.intro}</h2>
                  <p>
                    <strong>KidSport:</strong> {data.kidsportNote}{' '}
                    <a href={data.kidsportUrl} target="_blank" rel="noopener noreferrer">More information</a>.
                  </p>
                  <h2>Swimming WA Membership Fees</h2>
                  <p>{data.swaIntro}</p>
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead><tr><th>Category</th><th>Description</th><th>Fee</th></tr></thead>
                      <tbody>
                        {data.swaFees.map((row) => (
                          <tr key={row.category}><td>{row.category}</td><td>{row.description}</td><td>{row.fee}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h2>Club Membership Fees</h2>
                  <p>{data.clubFeesIntro}</p>
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead><tr><th>Members</th><th>Fee</th></tr></thead>
                      <tbody>
                        {data.clubFees.map((row) => (
                          <tr key={row.members}><td>{row.members}</td><td>{row.fee}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h2>Club Squad Fees</h2>
                  <p>{data.squadFeesIntro}</p>
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead><tr><th>Squad(s)</th><th>Sessions</th><th>Fee</th></tr></thead>
                      <tbody>
                        {data.squadFees.map((row, i) => (
                          <tr key={i}><td>{row.squad}</td><td>{row.sessions}</td><td>{row.fee}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="small-note">
                    {data.footnote}{' '}
                    <a href={data.marcUrl} target="_blank" rel="noopener noreferrer">MARC entry fees</a>.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
