import AnimateIn from '../components/AnimateIn'

export default function CountryPennants() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Country Pennants 2025</h1>
          <p>Karratha &ndash; 28 Feb &ndash; 1 Mar 2026</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="country-pennants-promo">
            <AnimateIn type="scale">
              <img src="/images/country-pennants/cp-promo-banner.png" alt="Country Pennants 2025" className="cp-banner" />
            </AnimateIn>
            <AnimateIn type="fade-up" delay={100}>
              <img src="/images/country-pennants/club-logo-colour.png" alt="Mandurah Swimming Club" className="cp-logo" />
            </AnimateIn>
            <AnimateIn type="fade-up" delay={200}>
              <img src="/images/country-pennants/artwork.jpg" alt="" className="cp-artwork" />
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
