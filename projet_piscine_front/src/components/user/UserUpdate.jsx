import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const UserUpdate = () => {
  const token = Cookies.get("jwt");
  const user = jwtDecode(token);
  const [client, setClient] = useState([]);
  const [stateUpdate, setStateUpdate] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const findClient = async () => {
    const fetchDataClient = await fetch(
      `http://localhost:3020/api/clients/${await user.data.id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const responseJson = await fetchDataClient.json();
    setClient(responseJson.data);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const business = event.target.business.value;

    const fetchOption = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        phone,
        business,
      }),
    };

    const fetchUpdateMethod = await fetch(
      `http://localhost:3020/api/clients/${await client.id}`,
      fetchOption
    );
    setStateUpdate(fetchUpdateMethod);

    if (fetchUpdateMethod.status === 200) {
      setIsUpdate(true);
      setTimeout(() => {
        setIsUpdate(false);
      }, 3000);
    } else {
      setTimeout(() => {
        setUpdateError(false);
      }, 3000);
    }
  };

  useEffect(() => {
    findClient();
  }, [stateUpdate]);

  return (
    <main className="dashboard-main-container">
      {client.length != 0 && (
        <form onSubmit={handleUpdate} className="upload-form blur">
          <h3>Modifier mes informations</h3>
          <div className="label-input flex">
            <label htmlFor="business">Entreprise : </label>
            <input type="text" name="business" defaultValue={client.business} />
          </div>
          <div className=" label-input flex">
            <label htmlFor="email">Mail : </label>
            <input
              className="email-input"
              type="email"
              name="email"
              defaultValue={client.email}
            />
          </div>
          <div className="label-input flex">
            <label htmlFor="phone">Téléphone : </label>
            <input type="number" name="phone" defaultValue={client.phone} />
          </div>
          <input
            type="submit"
            value={"Valider"}
            className="submit-btn btn gradient-btn"
          />
        </form>
      )}
      {isUpdate && (
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
            <div>
              <p>Modification réussie</p>
            </div>
          </div>
          <div className="pop-line"></div>
        </>
      )}
    </main>
  );
};

export default UserUpdate;
