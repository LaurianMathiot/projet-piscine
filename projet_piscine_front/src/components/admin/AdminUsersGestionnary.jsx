import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import ClientInformation from "./ClientInformation";

function UsersGestionnary() {
  const [users, setUsers] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3020/api/users");
    const responseJs = await response.json();

    // on récupère que les utilisateurs (pas l'admin)
    const filteredUsers = responseJs.data.filter((user) => user.roleId === 2);

    setUsers(filteredUsers);
  };

  const handleDeleteUser = async (userId) => {
    const shouldDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cet utilisateur ?"
    );
    if (!shouldDelete) {
      return;
    }
    const token = Cookies.get("jwt");

    const responseDelete = await fetch(
      `http://localhost:3020/api/users/${userId}`,
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

    fetchUsers();
  }, [refreshKey]);

  return (
    <main className="dashboard-main-container dashboard-files">
      <h3>Utilisateurs</h3>
      {users.map((user) => (
        <article className="flex element user-infos blur">
          <div className="flex">
            <h5>{user.username}</h5>
            {<ClientInformation user={user} />}
          </div>
          <button
            className="btn delete-btn"
            onClick={() => handleDeleteUser(user.id)}
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
        </article>
      ))}
    </main>
  );
}

export default UsersGestionnary;
