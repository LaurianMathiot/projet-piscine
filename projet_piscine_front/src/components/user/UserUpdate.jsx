import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const UserUpdate = () => {
  const token = Cookies.get("jwt");
  const user = jwtDecode(token);
  const [client, setClient] = useState([]);

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
  };
  useEffect(() => {
    findClient();
  }, []);
  return (
    <main>
      <h2>Modifier mes informations</h2>
      {client.length != 0 && (
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="business">Entreprise : </label>
            <input type="text" name="business" defaultValue={client.business} />
          </div>
          <div>
            <label htmlFor="email">Mail : </label>
            <input type="email" name="email" defaultValue={client.email} />
          </div>
          <div>
            <label htmlFor="phone">Téléphone : </label>
            <input type="number" name="phone" defaultValue={client.phone} />
          </div>
          <input type="submit" value={"Valider"} />
        </form>
      )}
    </main>
  );
};

export default UserUpdate;
