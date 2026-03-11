import AnimateIn from '../components/AnimateIn'
import data from '../../content/target-meets.json'

export default function TargetMeets() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Target Meets</h1>
          <p>{data.season}</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <img src={`${import.meta.env.BASE_URL}${data.image}`} alt="Target meets" className="page-featured-img" style={{ maxWidth: '640px', marginBottom: '1.5rem' }} />
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <div className="prose">
              <p>{data.intro}</p>
              <p>{data.pennantNote}</p>
              <h2>Target Meets for the {data.season}</h2>
              <ul>
                {data.meets.map((meet) => (
                  <li key={meet}>{meet}</li>
                ))}
              </ul>
              <p><em>{data.footnote}</em></p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
