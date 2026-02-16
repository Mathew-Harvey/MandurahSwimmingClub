import AnimateIn from '../components/AnimateIn'

export default function Uniform() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Uniform</h1>
          <p>Merchandise & uniforms</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="prose" style={{ marginBottom: '2rem' }}>
              <p>Club merchandise and uniforms are available to order through the club. Official colours are Blue, Teal and White. When representing the club at swim meets we ask for club uniforms including swimming cap. Swim caps are available from the Club Office for $12.00. Our online uniform shop opens every few months for a limited period.</p>
              <p>
                <a href="https://www.meccasports.com.au/mandurah-swimming-club/" className="btn btn--primary btn--pill" target="_blank" rel="noopener noreferrer">Mecca Sports &ndash; Mandurah Swimming Club</a>
              </p>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <div className="uniform-gallery">
              <img src={`${import.meta.env.BASE_URL}images/uniform/polo-1.jpg`} alt="Polo shirt" />
              <img src={`${import.meta.env.BASE_URL}images/uniform/polo-2.jpg`} alt="Polo shirt" />
              <img src={`${import.meta.env.BASE_URL}images/uniform/cotton-tee-1.jpg`} alt="Cotton tee" />
              <img src={`${import.meta.env.BASE_URL}images/uniform/cotton-tee-2.jpg`} alt="Cotton tee" />
              <img src={`${import.meta.env.BASE_URL}images/uniform/hoodie-front.jpg`} alt="Hoodie front" />
              <img src={`${import.meta.env.BASE_URL}images/uniform/hoodie-grey-rear.jpg`} alt="Hoodie rear" />
            </div>
          </AnimateIn>
          <p className="text-center" style={{ marginTop: '1.5rem' }}>
            <img src={`${import.meta.env.BASE_URL}images/uniform/mecca-sports-logo.png`} alt="Mecca Sports" style={{ height: 40, display: 'inline-block' }} />
          </p>
        </div>
      </section>
    </>
  )
}
