export default function News() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Club News</h1>
          <p>Latest updates</p>
        </div>
      </header>
      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: 'none', textAlign: 'center', padding: '2rem 0' }}>
            <p>News and updates will be posted here. Check back soon or follow us on Facebook and Instagram for the latest.</p>
          </div>
        </div>
      </section>
    </>
  )
}
