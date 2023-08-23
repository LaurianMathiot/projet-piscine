import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

function ShowFiles() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:3020/api/files");
    const responseJs = await response.json();
    setFiles(responseJs.data);
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

    // on décode le jwt
    const user = jwtDecode(jwt);

    fetchFiles();
  }, []);

  return (
    <main className="dashboard-main-container dashboard-files">
      {files.map((file) => (
        <article className="flex element blur">
          <h5>{file.name}</h5>
          <a
            href={file.file}
            target="_blank"
            className="btn download-btn"
            download
          >
            Télécharger
          </a>
        </article>
      ))}
    </main>
  );
}

export default ShowFiles;
