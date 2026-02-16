import { Link } from 'react-router-dom'

const coaches = [
  { id: 'coach-sharky', name: 'Hyojin "Sharky" Son', role: 'Head Coach' },
  { id: 'coach-chelsea', name: 'Chelsea Maley', role: 'Junior Coach' },
  { id: 'coach-jemma', name: 'Jemma Thomson', role: 'Junior Coach' },
  { id: 'coach-charlotte', name: 'Charlotte Vreeken', role: 'Junior Coach' },
  { id: 'coach-sofia', name: 'Sofia Novoselskaia', role: 'Junior Coach' },
  { id: 'coach-aiden', name: 'Aiden Francesconi', role: 'Junior Coach' },
  { id: 'coach-kaiden', name: 'Kaiden Buss-Dawson', role: 'Junior Coach' },
]

export default function Coaches() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Coaches</h1>
          <p>Our coaching team</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> → Club Coaches
          </p>
          <div className="prose">
            <h2>Head Coach: Hyojin "Sharky" Son</h2>
            <p>
              Sharky has an impressive international coaching record, having previously spent 6 years as Head Coach of Manjimup Marlins Swimming Club. She has coached at various clubs in South Korea and Canada.
            </p>
            <p>
              Sharky's primary focus is on developing swimmers mentally and physically whilst maximising their talent and potential, with a focus on maintaining a strong team culture, mental edge and training with the right technique. She is excited to lead Mandurah Swimming Club to be a dominant force in swimming and will be a great mentor for all our coaches.
            </p>
            <h2>Junior Coaches</h2>
            <p>
              Our junior coaches are Chelsea Maley, Jemma Thomson, Charlotte Vreeken, Aiden Francesconi, Kaiden Buss-Dawson and Sofia Novoselskaia. Mandurah Swimming Club has a strong ethos on developing our members, not only to reach their swimming potential but other aspirations such as coaching. The club commenced a 'Development Training and Coaching Program' in 2022 to identify and develop swimmers that may want to work as coaches. All of our junior coaches are accomplished swimmers in their own right and now have the opportunity to pass on their extensive knowledge to our up-and-coming junior swimmers.
            </p>
          </div>
          <div className="coach-grid">
            {coaches.map((c) => (
              <div key={c.id} className="coach-block">
                <img src={`/images/coaches/${c.id}.png`} alt={c.name} />
                <h3>{c.name}</h3>
                <p>{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
