import AnimateIn from '../components/AnimateIn'

export default function Donate() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Make a Donation</h1>
          <p>Support the club</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <AnimateIn type="fade-up">
            <div className="prose">
              <h2>Containers for Change</h2>
              <p>Containers for Change is WA's container deposit scheme. For every eligible container returned, a 10-cent refund is given. You can support Mandurah Swimming Club in two ways:</p>
            </div>
          </AnimateIn>
          <div className="donate-cards">
            <AnimateIn type="fade-up" delay={80}>
              <div className="donate-card">
                <img src="/images/donate/donate-refund.png" alt="" />
                <h3>Option 1: Donate your refund</h3>
                <p>Quote scheme ID <strong>C10322190</strong> at your local refund point to donate your containers to Mandurah Swimming Club.</p>
              </div>
            </AnimateIn>
            <AnimateIn type="fade-up" delay={160}>
              <div className="donate-card">
                <img src="/images/donate/drop-off.jpg" alt="Drop off" />
                <h3>Option 2: Drop off your containers</h3>
                <p>Bring your eligible containers to Mandurah Swimming Club's office and we'll take care of the rest.</p>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn type="fade-up">
            <p>
              <a href="https://www.containersforchange.com.au/qld/help" target="_blank" rel="noopener noreferrer">Help &amp; more information</a>
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
