import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function UserHeader() {
  const navigate = useNavigate();

  const handleClickDeleteCookies = () => {
    Cookies.remove("jwt");
    navigate("/login");
  };

  const jwt = Cookies.get("jwt");
  const userData = jwtDecode(jwt);

  return (
    <>
      <header className="flex dashboard-header">
        <p>
          Bienvenue{" "}
          <span className="dashboard-username">{`${userData.data.username}`}</span>
        </p>
        <button
          className="logout-btn btn flex"
          onClick={handleClickDeleteCookies}
        >
          <p>Déconnexion</p>
        </button>
      </header>
    </>
  );
}

export default UserHeader;
