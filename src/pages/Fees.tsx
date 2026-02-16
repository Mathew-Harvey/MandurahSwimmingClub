import AnimateIn from '../components/AnimateIn'

export default function Fees() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Fees</h1>
          <p>Membership and squad fees</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <AnimateIn type="fade-up">
                <img src="/images/fees/laps-stock.jpg" alt="Swimming" className="page-featured-img" />
              </AnimateIn>
              <AnimateIn type="fade-up" delay={100}>
                <div className="prose">
                  <h2>We would love to have you as a Mandurah Swimming Club Member</h2>
                  <p>
                    <strong>KidSport:</strong> Mandurah Swimming Club accepts KidSport vouchers.{' '}
                    <a href="https://www.dlgsc.wa.gov.au/funding/sport-and-recreation-funding/kidsport" target="_blank" rel="noopener noreferrer">More information</a>.
                  </p>
                  <h2>Swimming WA Membership Fees</h2>
                  <p>Members are required to register with Swimming WA (comprehensive insurance and eligibility to compete). Fee paid online via My Swim Results; due 1st October each year.</p>
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead>
                        <tr><th>Category</th><th>Description</th><th>Fee</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Annual (Competitive)</td><td>Full membership Swimmers 9+</td><td>$153.55</td></tr>
                        <tr><td>Participation</td><td>Swimmers 9+ fitness / new to competitive</td><td>$92.66</td></tr>
                        <tr><td>Junior Dolphins</td><td>Swimmers 5&ndash;8 transitioning from learn-to-swim</td><td>$46.90</td></tr>
                        <tr><td>Parent/Guardian</td><td>Required per family with swimmer under 18</td><td>$5.62</td></tr>
                        <tr><td>Coach</td><td>ASCTA accreditation</td><td>$33.28</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <h2>Club Membership Fees</h2>
                  <p>Invoiced biannually in October & April.</p>
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead>
                        <tr><th>Members</th><th>Fee</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>One Child</td><td>$100</td></tr>
                        <tr><td>Two Children</td><td>$190</td></tr>
                        <tr><td>Three Children</td><td>$270</td></tr>
                        <tr><td>Four Children</td><td>$340</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <h2>Club Squad Fees</h2>
                  <p>Squad fees (invoiced monthly) include coaching, lane hire and club nights.</p>
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead>
                        <tr><th>Squad(s)</th><th>Sessions</th><th>Fee</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Purple</td><td>2</td><td>$52</td></tr>
                        <tr><td>Blue</td><td>2</td><td>$58</td></tr>
                        <tr><td>Fitness/Non-Competitive</td><td>2</td><td>$55</td></tr>
                        <tr><td>Purple</td><td>3</td><td>$72</td></tr>
                        <tr><td>Blue</td><td>3</td><td>$86</td></tr>
                        <tr><td>Green</td><td>3</td><td>$86</td></tr>
                        <tr><td>Green / Yellow / Orange</td><td>4</td><td>$107</td></tr>
                        <tr><td>Fitness/Non-Competitive</td><td>4</td><td>$85</td></tr>
                        <tr><td>Yellow / Orange</td><td>5</td><td>$121</td></tr>
                        <tr><td>Red</td><td>5</td><td>$121</td></tr>
                        <tr><td>Red / Black</td><td>6</td><td>$132.50</td></tr>
                        <tr><td>Red / Black</td><td>7</td><td>$144.50</td></tr>
                        <tr><td>Black</td><td>8</td><td>$157</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="small-note">
                    Mandurah Swimming Club fees do not include entry to the MARC pool facility.{' '}
                    <a href="https://www.mandurah.wa.gov.au/community/places/aquatic-and-recreation-centres/memberships-and-entry-fees" target="_blank" rel="noopener noreferrer">MARC entry fees</a>.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
