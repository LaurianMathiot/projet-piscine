import "./SignupPage.scss";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicHeader from "../../components/public/PublicHeader";
import Footer from "../../components/public/Footer";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [indexTime, setIndexTime] = useState(3);
  const [wrongadmin, setWrongAdmin] = useState(false);

  const HandleSignupSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const business = event.target.business.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const signupUserResponse = await fetch(
      "http://localhost:3020/api/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ username, password, business, email, phone }),
      }
    );

    if (signupUserResponse.status === 201) {
      const signupData = await signupUserResponse.json();

      const jwt = signupData.data;
      Cookies.set("jwt", jwt);

      navigate("/login");
    } else {
      setWrongAdmin(true);
      setTimeout(() => {
        setWrongAdmin(false);
      }, 3000);
    }
  };

  return (
    <>
      <PublicHeader />
      <section className="signup-section flex">
        <div className="signup-container">
          <div className="signup-form-container blur">
            <h2>Créer un compte</h2>
            <form className="signup-form" onSubmit={HandleSignupSubmit}>
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
        {wrongadmin === true && (
          <>
            <div className="pop-msg pop-msg-error flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
              </svg>
              <p>Inscription échouée</p>
            </div>
            <div className="pop-line"></div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default SignupPage;
