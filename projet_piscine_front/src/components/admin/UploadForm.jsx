import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const UploadForm = () => {
  const [allClient, setAllclient] = useState([]);
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

  const handleUploadFile = async (event) => {
    event.preventDefault();

    const fileData = {
      name: event.target.filename.value,
      filetype: parseInt(event.target.fileType.value),
      client: parseInt(event.target.client.value),
    };

    const formData = new FormData();

    formData.append("file", event.target.file.files[0]);
    formData.append("data", JSON.stringify(fileData));

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

    console.log(responseCreate);

    if (responseCreate.status === 201) {
      navigate("/admin-dashboard/files");
    }
  };

  useEffect(() => {
    if (!Cookies.get("jwt")) {
      navigate("/login");
    }
    allClients();
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
      <select name="fileType" id="type-select" className="btn">
        <option value="">Type de fichier</option>
        <option value="1">Devis</option>
        <option value="2">Facture</option>
        <option value="3">Création</option>
      </select>
      <select name="client" id="client-select" className="btn">
        <option value="">Client</option>
        {allClient.length !== 0 &&
          allClient.map((client) => {
            return <option value={client.id}>{client.business}</option>;
          })}
      </select>
      <input type="submit" className="submit-btn btn gradient-btn" />
    </form>
  );
};

export default UploadForm;
