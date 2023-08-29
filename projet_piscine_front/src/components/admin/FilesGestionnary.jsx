import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

function FilesGestionnary() {
  const [files, setFiles] = useState([]);
  const [allClient, setAllclient] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [filterFiles, setFilterFiles] = useState([]);

  const navigate = useNavigate();
  const token = Cookies.get("jwt");

  const allClients = async () => {
    const fetchOption = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchClient = await fetch(
      "http://localhost:3020/api/clients/",
      fetchOption
    );
    const responseJson = await fetchClient.json();
    setAllclient(responseJson.data);
  };

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:3020/api/files");
    const responseJs = await response.json();
    setFiles(responseJs.data);
  };

  const handleDeleteFile = async (fileId) => {
    const shouldDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce fichier ?"
    );
    if (!shouldDelete) {
      return;
    }
    const token = Cookies.get("jwt");

    const responseDelete = await fetch(
      `http://localhost:3020/api/files/${fileId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const responseDeleteJs = await responseDelete.json();
    setRefreshKey((prevKey) => prevKey + 1);
  };
  const handleChange = (event, files) => {
    let result;
    if (parseInt(event.target.value) === 0) {
      result = files;
    } else {
      result = files.filter(
        (file) => file.clientId === parseInt(event.target.value)
      );
    }

    setFilterFiles(result);
  };

  useEffect(() => {
    // on récupère le token jwt en cookie
    const jwt = Cookies.get("jwt");

    // s'il existe pas, ça veut que l'utilisateur n'est pas connecté
    // on le redirige vers la page de login
    if (!jwt) {
      navigate("/login");
      return;
    }
    allClients();

    // on décode le jwt
    const user = jwtDecode(jwt);
    fetchFiles();
  }, [files]);

  return (
    <main className="dashboard-main-container dashboard-files">
      <h3>Fichiers</h3>
      <form onChange={(event) => handleChange(event, files)}>
        <select name="client" id="client-select" className="btn">
          <option value="nothing" selected disabled>
            - Choisissez une option -
          </option>
          <option value="0">Tout voir</option>
          {allClient.length !== 0 &&
            allClient.map((client) => {
              return <option value={client.id}>{client.business}</option>;
            })}
        </select>
      </form>
      {filterFiles.map((file) => (
        <article className="flex element blur">
          <h5>{file.name}</h5>
          <div className="files-btns-container flex">
            <a
              href={file.file}
              target="_blank"
              className="btn download-btn"
              download
            >
              Télécharger
            </a>
            <button
              className="btn delete-btn"
              onClick={() => handleDeleteFile(file.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
              </svg>
            </button>
          </div>
        </article>
      ))}
    </main>
  );
}

export default FilesGestionnary;
