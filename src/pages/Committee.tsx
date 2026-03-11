import { Link } from 'react-router-dom'
import AnimateIn from '../components/AnimateIn'
import data from '../../content/committee.json'

export default function Committee() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club Committee</h1>
          <p>{data.season} Committee</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/about">About Us</Link> <span>&rarr;</span> Club Committee
          </p>
          <AnimateIn type="fade-up">
            <h2>Office Bearers</h2>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr><th>Role</th><th>Name</th><th>Email</th></tr>
                </thead>
                <tbody>
                  {data.officeBearers.map((row) => (
                    <tr key={row.role}>
                      <td>{row.role}</td>
                      <td>{row.name}</td>
                      <td>{row.email ? <a href={`mailto:${row.email}`}>{row.email}</a> : '\u2014'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={100}>
            <h2>General Committee</h2>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr><th>Role</th><th>Name</th><th>Email</th></tr>
                </thead>
                <tbody>
                  {data.generalCommittee.map((row) => (
                    <tr key={row.role}>
                      <td>{row.role}</td>
                      <td>{row.name}</td>
                      <td>{row.email ? <a href={`mailto:${row.email}`}>{row.email}</a> : '\u2014'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
