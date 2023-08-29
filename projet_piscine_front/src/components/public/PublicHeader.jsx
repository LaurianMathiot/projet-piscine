import { Link } from "react-router-dom";

function PublicHeader() {
  return (
    <header className="public-main-header">
      <div className="header-nav-container blur">
        <img
          className="header-logo"
          src="./images/logo_lm.png"
          alt="main-logo"
        />
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <Link className="user-btn blur" to="/login">
        <img src="./images/user.png" alt="user-img" />
      </Link>
    </header>
  );
}

export default PublicHeader;
