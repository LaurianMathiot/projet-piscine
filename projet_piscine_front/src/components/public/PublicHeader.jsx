import "./PublicHeader.scss";

function PublicHeader() {
  return (
    <header className="public-main-header">
      <div className="header-nav-container">
        <img
          className="header-logo"
          src="./images/logo_lm.png"
          alt="main-logo"
        />
        <nav className="main-nav">
          <ul>
            <li>
              <a href="">Accueil</a>
            </li>
            <li>
              <a href="">Réalisations</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="" className="user-btn">
        <img src="./images/user.png" alt="user-img" />
      </a>
    </header>
  );
}

export default PublicHeader;
