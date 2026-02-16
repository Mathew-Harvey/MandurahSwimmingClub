import AnimateIn from '../components/AnimateIn'

export default function Championships() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Championships</h1>
          <p>Held in March/April</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <img src={`${import.meta.env.BASE_URL}images/championships/team.jpg`} alt="Club Championships" className="page-featured-img" style={{ maxWidth: '720px', marginBottom: '1.5rem' }} />
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <div className="prose">
              <p>Club Championships are held in March/April. The Club Champion is awarded in each age group for both male and female swimmers with the highest points achieved from the Club Championship events.</p>
              <h2>Eligibility</h2>
              <ul>
                <li>Be a financial registered competitive swimmer with no outstanding fees.</li>
                <li>Have participated in 6 Time Trials over Winter and Summer season (new members joining in Summer: minimum 3 Time Trials).</li>
                <li>Have been a registered member of Mandurah Swimming Club for a minimum of 2 months.</li>
              </ul>
              <p>The Championships are conducted with qualified WA Technical Officials and swim results registered as Official Times. Time Trials are an integral part of qualifying to compete in Club Championships.</p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
