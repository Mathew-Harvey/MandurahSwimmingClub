import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import data from '../../content/coaches.json'

export default function Coaches() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Coaches</h1>
          <p>Our coaching team</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> <span>&rarr;</span> Club Coaches
          </p>
          <AnimateIn type="fade-up">
            <div className="prose">
              <h2>Head Coach: {data.coaches[0]?.name}</h2>
              {data.headCoachBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h2>Junior Coaches</h2>
              <p>{data.juniorCoachesIntro}</p>
            </div>
          </AnimateIn>
          <div className="coach-grid">
            {data.coaches.map((c, i) => (
              <AnimateIn key={c.id} type="fade-up" delay={i * 60}>
                <div className="coach-block">
                  <img src={`/images/coaches/${c.id}.png`} alt={c.name} />
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
