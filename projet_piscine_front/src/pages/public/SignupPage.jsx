import "./SignupPage.scss";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicHeader from "../../components/public/PublicHeader";
import Footer from "../../components/public/Footer";

const SignupPage = () => {
  return (
    <>
      <PublicHeader />
      <section className="signup-section flex">
        <div className="signup-container">
          <div className="signup-form-container blur">
            <h2>Créer un compte</h2>
            <form className="signup-form">
              <div className="form-element flex">
                <label htmlFor="username">
                  Nom d'utilisateur<span>*</span>
                </label>
                <input type="text" name="username" />
              </div>
              <div className="form-element flex">
                <label htmlFor="password">
                  Mot de passe<span>*</span>
                </label>
                <input type="password" name="password" />
              </div>
              <div className="form-element flex">
                <label htmlFor="business">
                  Entreprise<span>*</span>
                </label>
                <input type="text" name="business" />
              </div>
              <div className="form-element flex">
                <label htmlFor="email">
                  E-mail<span>*</span>
                </label>
                <input type="email" name="email" />
              </div>
              <div className="form-element flex">
                <label htmlFor="phone">Téléphone</label>
                <input type="number" name="phone" />
              </div>
              <input
                type="submit"
                className="signup-submit-btn gradient-btn"
                value="Créer un compte"
              />
            </form>
          </div>
          <div className="signup-redirection">
            <p>Déjà un compte ?</p>
            <Link className="gradient-btn redirection-btn btn" to="/login">
              Connectez-vous ici
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignupPage;
