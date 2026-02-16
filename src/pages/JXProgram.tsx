import AnimateIn from '../components/AnimateIn'

const gold = ['Emily Snowdon']
const silver = ['Alyssa Chehtae', 'Chloe Duthie', 'Dakota Fernandes', 'Phoebe Gilbert', 'Eloise Haugh', 'Freya Keogh', 'Sofia Keogh', 'Kate Maley', 'Shelby Rahe', 'Sadhbh McDonnell', 'Evie Middlebrook Maher', 'Jio Nikolic', 'Sophie Osment', 'Phak Saridlapdhamrong', 'Alexander Vreeken', 'Layla Woodley']
const bronze = ['Taj Gilbert', 'Remy Lukasik', 'Shelby Friehe', 'Evie Francesconi', 'Mariia Novoselskaia', "Branson O'Meara", 'Talia Peters', 'Amber Reid', 'Brax Sanders']
const blue = ['Issaac Cronin', 'Seth Cronin', 'Milly Johnston', 'Amelia Keogh', 'Chani Kim', 'Hadley Lowerson', 'Tyler Penny', 'Steven Peters', 'Josie Salpietro', 'Mahyarussamee Saridlapdhamrong', 'Jesse Spencer']

export default function JXProgram() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Junior Excellence (JX) Program</h1>
          <p>2024&ndash;2025</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <img src={`${import.meta.env.BASE_URL}images/jx-program/junior-phoenix.jpg`} alt="Junior Phoenix" className="page-featured-img" style={{ maxWidth: '480px', marginBottom: '1.5rem' }} />
          </AnimateIn>
          <AnimateIn type="fade-up" delay={80}>
            <div className="prose">
              <p>The 2024&ndash;25 Bio Island Australian Junior Excellence (JX) program recognises performances from 1 May 2025 to 30 April 2025. Swimming Australia recognises swimmers aged 9&ndash;13 years with gold, silver, bronze or blue standard based on their best performance(s) against the times set by Swimming Australia.</p>
              <p>To qualify, swimmers need to be a member of an Australian swimming club and achieve a qualifying time at an approved meet. <a href="https://www.swimming.org.au/sites/default/files/assets/documents/JX%202021-22%20Qualifying%20Criteria%20and%20Standards_0.pdf" target="_blank" rel="noopener noreferrer">Swimming Australia &ndash; JX qualifying times</a>.</p>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={160}>
            <h2>2024&ndash;2025 Results</h2>
            <div className="jx-results">
              <div className="jx-tier">
                <h3>Gold</h3>
                <ul>{gold.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
              <div className="jx-tier">
                <h3>Silver</h3>
                <ul>{silver.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
              <div className="jx-tier">
                <h3>Bronze</h3>
                <ul>{bronze.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
              <div className="jx-tier">
                <h3>Blue</h3>
                <ul>{blue.map((n) => <li key={n}>{n}</li>)}</ul>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
