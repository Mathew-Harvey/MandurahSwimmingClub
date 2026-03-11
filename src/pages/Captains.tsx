import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import data from '../../content/captains.json'

export default function Captains() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Captains</h1>
          <p>{data.season} Season Captains</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> <span>&rarr;</span> Club Captains
          </p>
          <AnimateIn type="fade-up">
            <div className="prose">
              {data.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h2>Selection Criteria</h2>
              <ul>
                {data.selectionCriteria.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <div className="captain-grid">
            {data.captains.map((c, i) => (
              <AnimateIn key={c.id} type="fade-up" delay={i * 80}>
                <div className="captain-block">
                  <img src={`/images/captains/${c.id}.png`} alt={c.name} />
                  <h3>{c.name}</h3>
                  <p>{c.role}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
