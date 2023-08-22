import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

function FilesGestionnary() {
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
    }

    // on décode le jwt
    const user = jwtDecode(jwt);

    fetchFiles();
  });

  const handleDeleteFile = async (fileId) => {
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
  };

  return (
    <>
      <div>
        {files.map((file) => (
          <>
            <h3>{file.name}</h3>
            <button onClick={() => handleDeleteFile(file.id)}>Supprimer</button>
          </>
        ))}
      </div>
    </>
  );
}

export default FilesGestionnary;
