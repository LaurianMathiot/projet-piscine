import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PublicHeader from "../../components/public/PublicHeader";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [indexTime, setIndexTime] = useState(3);
  const [wrongadmin, setWrongAdmin] = useState(false);

  const HandleLoginSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginResponse = await fetch("http://localhost:3010/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username, password }),
    });

    if (loginResponse.status === 200) {
      const loginData = await loginResponse.json();

      const jwt = loginData.data;
      Cookies.set("jwt", jwt);

      setInterval(() => {
        setIndexTime((indexTime) => indexTime - 1);
      }, 1000);

      setIsLogin("success");

      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    } else {
      setIsLogin("error");
      setWrongAdmin(true);
      setTimeout(() => {
        setWrongAdmin(false);
      }, 3000);
    }
  };

  return (
    <>
      <PublicHeader />
      <section className="login-section flex">
        <div className="login-container">
          <div className="login-form-container blur">
            <h2>Connection</h2>
            <form onSubmit={HandleLoginSubmit} className="login-form">
              <div className="form-element flex">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" />
              </div>
              <div className="form-element flex">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" />
              </div>
              <input
                type="submit"
                className="login-submit-btn gradient-btn"
                value="Se connecter"
              />
            </form>
          </div>
          <div className="signup-redirection">
            <p>Pas de compte :</p>
            <Link className="gradient-btn redirection-btn btn">
              Inscrivez-vous ici
            </Link>
          </div>
        </div>

        {isLogin === "success" && (
          <>
            <div className="pop-msg flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q75 0 140 24t117 66l-43 43q-44-35-98-54t-116-19q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140q145 0 242.5-97.5T820-480q0-30-4.5-58.5T802-594l46-46q16 37 24 77t8 83q0 85-31 158t-85 127q-54 54-127 84.5T480-80Zm-59-218L256-464l45-45 120 120 414-414 46 45-460 460Z" />
              </svg>
              <p>Connexion réussie</p>
            </div>
            <div className="pop-line"></div>
          </>
        )}
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
              <p>Connexion échouée</p>
            </div>
            <div className="pop-line"></div>
          </>
        )}
      </section>
    </>
  );
};

export default LoginPage;
