import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const ClientInformation = ({ user }) => {
  const token = Cookies.get("jwt");
  const [clients, setClients] = useState([]);

  const findlient = async () => {
    const fetchOption = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const fetchClient = await fetch(
      `http://localhost:3020/api/clients/`,
      fetchOption
    );

    const responseJson = await fetchClient.json();
    setClients(responseJson.data);
  };

  useEffect(() => {
    findlient();
  }, []);

  return (
    clients.length != 0 && (
      <div>
        {clients.map((client) => {
          return (
            user.id === client.userId && (
              <div className="flex client-infos">
                <div className="business">
                  {" "}
                  <p>{client.business}</p>
                </div>
                <div className="email">
                  <p>{client.email}</p>
                </div>
                <div className="phone">
                  <p>{client.phone}</p>
                </div>
              </div>
            )
          );
        })}
      </div>
    )
  );
};

export default ClientInformation;
