import { Link } from 'react-router-dom'

export default function TrainingFacilities() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Training Facilities</h1>
          <p>Mandurah Aquatic & Recreation Centre</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> → Training Facilities
          </p>
          <div className="facility-grid">
            <div className="facility-card">
              <img src="/images/training-facilities/indoor-pool.jpg" alt="Indoor 25m pool" />
              <h2>Indoor 25m Pool</h2>
              <ul>
                <li>8 × 25 metre lap lanes</li>
                <li>Depth from 1.1 to 1.4 metres</li>
                <li>Temperature 29.5°C</li>
              </ul>
            </div>
            <div className="facility-card">
              <img src="/images/training-facilities/outdoor-pool.jpg" alt="Outdoor 50m pool" />
              <h2>Outdoor 50m Pool</h2>
              <ul>
                <li>8 × 50 metre lap lanes</li>
                <li>Moveable boom to separate into 2 × 25m pools</li>
                <li>Depth from 1.2 to 2 metres</li>
                <li>Temperature 27–28°C</li>
                <li>Undercover grandstand seating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
