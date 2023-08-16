import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./AdminDashboard.scss";
import Footer from "../../components/public/Footer";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleClickDeleteCookies = () => {
    Cookies.remove("jwt");
    navigate("/");
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
          className="dashboard-btn btn flex"
          onClick={handleClickDeleteCookies}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            height="auto"
            viewBox="0 -960 960 960"
            width="20"
          >
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z" />
          </svg> */}
          Déconnexion
        </button>
      </header>
      <section className="dashboard flex">
        <aside className="dashboard-aside">
          <nav>
            <ul>
              <li className="flex upload">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="auto"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path d="M452-202h60v-201l82 82 42-42-156-152-154 154 42 42 84-84v201ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" />
                </svg>
                <p>Uploader</p>
              </li>
              <li className="flex clients">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="auto"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path d="M400-485q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM80-164v-94q0-35 17.5-63t50.5-43q72-32 133.5-46T400-424h23q-6 14-9 27.5t-5 32.5h-9q-58 0-113.5 12.5T172-310q-16 8-24 22.5t-8 29.5v34h269q5 18 12 32.5t17 27.5H80Zm587 44-10-66q-17-5-34.5-14.5T593-222l-55 12-25-42 47-44q-2-9-2-25t2-25l-47-44 25-42 55 12q12-12 29.5-21.5T657-456l10-66h54l10 66q17 5 34.5 14.5T795-420l55-12 25 42-47 44q2 9 2 25t-2 25l47 44-25 42-55-12q-12 12-29.5 21.5T731-186l-10 66h-54Zm27-121q36 0 58-22t22-58q0-36-22-58t-58-22q-36 0-58 22t-22 58q0 36 22 58t58 22ZM400-545q39 0 64.5-25.5T490-635q0-39-25.5-64.5T400-725q-39 0-64.5 25.5T310-635q0 39 25.5 64.5T400-545Zm0-90Zm9 411Z" />
                </svg>
                <p>Clients</p>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="dashboard-main-container">
          <form className="upload-form blur">
            <h3>Uploader un fichier</h3>
            <div className="upload-input flex">
              <input
                type="file"
                id="file"
                name="file"
                //   accept="image/png, image/jpeg"
              />
            </div>
            <select name="file-type" id="type-select" className="btn">
              <option value="">Type de fichier</option>
              <option value="devis">Devis</option>
              <option value="facture">Facture</option>
              <option value="création">Création</option>
            </select>
            <select name="client" id="client-select" className="btn">
              <option value="">Client</option>
            </select>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboard;
