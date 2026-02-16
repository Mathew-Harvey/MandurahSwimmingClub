import { Link } from 'react-router-dom'

export default function FuelToGo() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Fuel to Go & Play</h1>
          <p>Kickstarters Club – FTGP Club Excellence GOLD</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> → Fuel to Go & Play
          </p>
          <div className="ftgp-hero">
            <img src="/images/fuel-to-go/ftgp-main.jpg" alt="Fuel to Go and Play" className="ftgp-main-img" />
            <img src="/images/fuel-to-go/ftgp-gold-badge.png" alt="FTGP Gold Badge" className="ftgp-badge" />
          </div>
          <div className="prose">
            <h2>Club Pledge</h2>
            <p className="pledge">
              MANDURAH SWIMMING CLUB ARE COMMITTED TO PROVIDING AND PROMOTING HEALTHY FOOD AND DRINK TO PARTICIPANTS AND PATRONS DURING AND AFTER SWIMMING.
            </p>
            <h3>1. Providing Healthy Food and Drink</h3>
            <p>Mandurah Swimming Club will have free drinking water available at all times and will aim to have healthy food and drinks available before, during and after swimming.</p>
            <h3>2. Promoting Healthy Food and Drink</h3>
            <p>Mandurah Swimming Club will aim to promote water as the drink of choice during and after swimming; promote healthy food and drink options; limit the display of unhealthy options at club facilities; and display and/or distribute information about healthy eating and drinking.</p>
            <h3>3. Healthy Club Culture</h3>
            <p>Mandurah Swimming Club will aim to encourage and support all club personnel to actively discourage lollies and sports drinks and instead promote healthy eating and drinking before, during and after swimming.</p>
            <h3>4. Healthy Club Policy</h3>
            <p>Mandurah Swimming Club supports and actively participates in the Healthy Club principles as embodied in the Healthway and Sports Medicine Australia guidelines. The Club promotes a smoke, alcohol and drug free environment. It encourages healthy eating, sport safety and sun smart practices.</p>
            <h2>Downloadable Documents</h2>
            <ul className="pdf-list">
              <li><a href="/pdfs/external/ftgp-fact-sheet.pdf" target="_blank" rel="noopener noreferrer">Fuel to Go & Play Fact Sheet</a></li>
              <li><a href="/pdfs/external/healthy-recipes.pdf" target="_blank" rel="noopener noreferrer">Healthy Recipes</a></li>
              <li><a href="/pdfs/external/swa-healthy-club-policy.pdf" target="_blank" rel="noopener noreferrer">Healthy Club Policy</a></li>
            </ul>
            <p>
              <a href="https://www.fueltogo.com.au/" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Fuel to Go & Play</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
