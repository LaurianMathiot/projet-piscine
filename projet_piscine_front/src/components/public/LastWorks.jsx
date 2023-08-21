function LastWorks() {
  return (
    <section className="last-works">
      <div className="container">
        <div className="flex">
          <h2>Mes dernières réalisations</h2>
          <div>
            <a className="btn select-btn" href="">
              Tout
            </a>
            <a className="btn select-btn" href="">
              Logo
            </a>
            <a className="btn select-btn" href="">
              Print
            </a>
            <a className="btn select-btn" href="">
              Web
            </a>
          </div>
        </div>
        <div className="last-works-cards"></div>
        <a href="" className="btn gradient-btn">
          Tout voir
        </a>
      </div>
    </section>
  );
}

export default LastWorks;
