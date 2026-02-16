import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'

const mscPolicies = [
  { name: 'Pool Deck Behaviour - Parents', path: '/pdfs/policies/01-pool-deck-behaviour-parents.pdf' },
  { name: 'Pool Deck Behaviour - Coaches', path: '/pdfs/policies/02-pool-deck-behaviour-coaches.pdf' },
  { name: 'Coaching Swim Meet', path: '/pdfs/policies/03-coaching-swim-meet.pdf' },
  { name: 'Code of Conduct - Administrator, Technical Official', path: '/pdfs/policies/04-code-of-conduct-admin-to.pdf' },
  { name: 'Code of Conduct', path: '/pdfs/policies/05-code-of-conduct.pdf' },
  { name: 'Fees', path: '/pdfs/policies/06-fees.pdf' },
  { name: 'Discipline Procedure', path: '/pdfs/policies/07-discipline-procedure.pdf' },
  { name: 'Timekeeping', path: '/pdfs/policies/08-timekeeping.pdf' },
  { name: 'WWCC & Coaching Qualifications', path: '/pdfs/policies/09-wwcc-coaching-qualifications.pdf' },
  { name: 'Club Captain Selection Criteria', path: '/pdfs/policies/10-club-captain-selection.pdf' },
  { name: 'One Club One Family', path: '/pdfs/policies/11-one-club-one-family.pdf' },
  { name: 'National Team', path: '/pdfs/policies/12-national-team.pdf' },
  { name: 'Sun Protection', path: '/pdfs/policies/13-sun-protection.pdf' },
  { name: 'Club Records', path: '/pdfs/policies/14-club-records.pdf' },
]

const governance = [
  { name: 'Strategic Plan', path: '/pdfs/governance/strategic-plan.pdf' },
  { name: 'Club Constitution', path: '/pdfs/governance/club-constitution.pdf' },
]

const external = [
  { name: 'Member Protection Policy (Swimming Australia)', path: '/pdfs/external/sa-member-protection-policy.pdf' },
  { name: 'Safeguarding Children and Young People Policy (Swimming Australia)', path: '/pdfs/external/sa-safeguarding-children-policy.pdf' },
  { name: 'Swimming WA Healthy Club Policy', path: '/pdfs/external/swa-healthy-club-policy.pdf' },
  { name: 'Swimming WA Photography Policy', path: '/pdfs/external/swa-photography-policy.pdf' },
  { name: 'MARC Lightning Policy', path: '/pdfs/external/marc-lightning-policy.pdf' },
]

export default function Integrity() {
  return (
    <>
      <header className="page-header integrity-header">
        <img src={`${import.meta.env.BASE_URL}images/integrity/header-image.jpeg`} alt="" className="page-header-bg" />
        <div className="container">
          <h1>Integrity, Policies & Rules</h1>
          <p>Keeping everyone safe</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> <span>&rarr;</span> Integrity, Policies & Rules
          </p>
          <AnimateIn type="fade-up">
            <div className="prose">
              <p>
                Our swimming club policies ensure that all swimmers are safe and provide guidelines for both parents and swimmers to uphold the integrity of the sport. Mandurah Swimming Club fully incorporates{' '}
                <a href="https://www.swimming.org.au/integrity-policies-rules/safe-sport-framework" target="_blank" rel="noopener noreferrer">Swimming Australia's Safe Sport Framework</a>.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={80}>
            <h2>MSC Policies</h2>
            <ul className="pdf-list">
              {mscPolicies.map((p) => (
                <li key={p.path}><a href={p.path} target="_blank" rel="noopener noreferrer">{p.name}</a></li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={160}>
            <h2>MSC Governance</h2>
            <ul className="pdf-list">
              {governance.map((p) => (
                <li key={p.path}><a href={p.path} target="_blank" rel="noopener noreferrer">{p.name}</a></li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={240}>
            <h2>Swimming Australia & Swimming WA Policies</h2>
            <ul className="pdf-list">
              {external.map((p) => (
                <li key={p.path}><a href={p.path} target="_blank" rel="noopener noreferrer">{p.name}</a></li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
