import AnimateIn from '../components/AnimateIn'

export default function ClubNights() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Nights</h1>
          <p>Time Trials</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="club-nights-imgs">
              <img src={`${import.meta.env.BASE_URL}images/club-nights/lily-and-megan.jpg`} alt="Club night" />
              <img src={`${import.meta.env.BASE_URL}images/club-nights/time-trials.jpg`} alt="Time trials" />
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <div className="prose">
              <h2>Time Trials</h2>
              <p>Time Trials give our athletes the opportunity to race in a fun and relaxed environment, and introduce junior swimmers to competitive swimming in a fun and safe environment. Performance squad members can achieve official qualifying times.</p>
              <h3>Key Information</h3>
              <ul>
                <li>Only Swimming WA registered 'competitive' members (on the day of the meet) are eligible for times to be recognised for future sanctioned online meet entries. Visitors wanting to become a member: contact <a href="mailto:registrar@mandurahswimmingclub.com.au">registrar@mandurahswimmingclub.com.au</a>.</li>
                <li>Entries close if the number of entries exceeds a reasonable finish time.</li>
                <li>All swimmers are expected to provide at least one volunteer for timekeeping.</li>
                <li>Time Trials are held on Friday nights at MARC: warm up 6:00pm, racing from 6:30pm. Entries must be submitted by 9:00pm on the Wednesday prior.</li>
              </ul>
              <h3>2025&ndash;2026 Results</h3>
              <p>
                <a href="/pdfs/results/time-trial-results-lc-17oct2025.pdf" target="_blank" rel="noopener noreferrer">Time Trial Results Long Course 17th October 2025 (PDF)</a>
              </p>
              <h3>Helpful Information for New Swimmers</h3>
              <p>Bring: bathers, Mandurah Swimming Club cap and goggles. Arrive 30 mins early to warm up. After warm up you'll be called for marshalling &mdash; confirm heat and lane, then follow officials to the blocks. Have fun and ask marshalling staff or Club Captains if you need help.</p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
