import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

function ShowFiles() {
  const [files, setFiles] = useState([]);
  const [findClient, setFindClient] = useState([]);
  const navigate = useNavigate();
  // on récupère le token jwt en cookie
  const jwt = Cookies.get("jwt");
  // on décode le jwt
  const user = jwtDecode(jwt);

  const findFilesbyUser = async () => {
    const fetchOption = {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    };
    const fetchClient = await fetch(
      `http://localhost:3020/api/clients/${await user.data.id}`,
      fetchOption
    );

    const responseJson = await fetchClient.json();
    setFindClient(responseJson.data);
  };

  const fetchFiles = async () => {
    const response = await fetch("http://localhost:3020/api/files");
    const responseJs = await response.json();
    setFiles(responseJs.data);
  };

  useEffect(() => {
    // s'il existe pas, ça veut que l'utilisateur n'est pas connecté
    // on le redirige vers la page de login
    if (!jwt) {
      navigate("/login");
      return;
    }
    findFilesbyUser();
    fetchFiles();
  }, []);

  return (
    <main className="dashboard-main-container dashboard-files">
      <h3>Fichiers</h3>
      {files.map(
        (file) =>
          findClient.id === file.clientId &&
          file.filetypeId === 3 && (
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
          )
      )}
    </main>
  );
}

export default ShowFiles;
