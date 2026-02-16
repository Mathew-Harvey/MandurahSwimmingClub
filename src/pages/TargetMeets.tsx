import AnimateIn from '../components/AnimateIn'

const targetMeets = [
  'SWA Summer Qual Meet - 8th & 9th November',
  'Southwest Region Meet - 16th November',
  'Club Night/Time Trials - 21st November',
  '2025 Mandurah LC Challenge - 30th November',
  'Hancock Prospecting State Championships (Senior) 19th to 22nd December',
  'Hancock Prospecting State Relays (Junior & Seniors) 23rd December',
  'Swimming WA Country Championships 2nd to 4th January 2026',
  'Club Night/Time Trials - 30th January',
  'SWA National Prep Meet (Junior Challenge) - 14th & 15th February',
  '2026 Country Pennants - Karratha - 28th February to 1st March',
  'MSC Club Championships - 21st March',
  'Aqua Technics WA Junior Championships - 27th to 29th March',
]

export default function TargetMeets() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Target Meets</h1>
          <p>2025 Long Course Season</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <img src="/images/target-meets/junior-lc-states.jpg" alt="Target meets" className="page-featured-img" style={{ maxWidth: '640px', marginBottom: '1.5rem' }} />
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <div className="prose">
              <p>Mandurah Swimming Club coaches and committee review upcoming meets and decide which to target as a club. We encourage all swimmers to work towards competing at swim meets. Coaches attend target meets to support swimmers. Discuss entries with your coach before registering.</p>
              <p>Swimmers intending to nominate for Country Pennants have until (and including) Country Championships to obtain their fastest time for the season, which determines the squad.</p>
              <h2>Target Meets for the 2025 Long Course Season</h2>
              <ul>
                {targetMeets.map((meet) => (
                  <li key={meet}>{meet}</li>
                ))}
              </ul>
              <p><em>Qualification times required to enter.</em></p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
