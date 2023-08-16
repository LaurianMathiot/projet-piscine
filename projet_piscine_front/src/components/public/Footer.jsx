import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="main-footer flex">
      <p>Copyright © {new Date().getFullYear()} </p>
      <img src="./images/logo_lm.png" alt="" />
      <p>
        <Link to="/">laurianmathiot.fr</Link> |{" "}
        <Link to="/mentions-legales">Mentions légales</Link>
      </p>
    </footer>
  );
}

export default Footer;
