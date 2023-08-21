import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

function UploadForm() {
  const navigate = useNavigate();

  const handleUploadFile = async (event) => {
    event.preventDefault();

    const fileData = {
      name: event.target.filename.value,
    };

    const formData = new FormData();

    formData.append("file", event.target.file.files[0]);
    formData.append("data", JSON.stringify(fileData));

    console.log(event.target.file);
    // on fait l'appel à l'api
    // avec une requête POST
    // en lui passant les données
    // en json dans la clé "body"
    // on précise qu'on envoie un json, via le header

    const token = Cookies.get("jwt");

    const responseCreate = await fetch("http://localhost:3020/api/files", {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseCreateJs = await responseCreate.json();

    console.log(responseCreateJs);
  };

  useEffect(() => {
    if (!Cookies.get("jwt")) {
      navigate("/login");
    }
  }, []);

  return (
    <form className="upload-form blur" onSubmit={handleUploadFile}>
      <h3>Uploader un fichier</h3>
      <div className="flex filename-input">
        <label htmlFor="filename">Nom du fichier</label>
        <input type="text" name="filename" />
      </div>
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
      <input type="submit" className="submit-btn btn gradient-btn" />
    </form>
  );
}

export default UploadForm;
