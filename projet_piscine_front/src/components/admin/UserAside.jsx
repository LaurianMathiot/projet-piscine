import { Link } from "react-router-dom";

function UserAside() {
  return (
    <aside className="dashboard-aside">
      <nav>
        <ul>
          <li className="flex upload">
            <Link className="flex" to="/user-dashboard/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M345-377h391L609-548 506-413l-68-87-93 123Zm-85 177q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z" />
              </svg>
              <p>Fichiers</p>
            </Link>
          </li>
          <li className="flex">
            <Link className="flex" to="/user-dashboard/bills">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" />
              </svg>
              <p>Devis et factures</p>
            </Link>
          </li>
          <li className="flex users">
            <Link className="flex" to="/user-dashboard/profil-update">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M400-485q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM80-164v-94q0-35 17.5-63t50.5-43q72-32 133.5-46T400-424h23q-6 14-9 27.5t-5 32.5h-9q-58 0-113.5 12.5T172-310q-16 8-24 22.5t-8 29.5v34h269q5 18 12 32.5t17 27.5H80Zm587 44-10-66q-17-5-34.5-14.5T593-222l-55 12-25-42 47-44q-2-9-2-25t2-25l-47-44 25-42 55 12q12-12 29.5-21.5T657-456l10-66h54l10 66q17 5 34.5 14.5T795-420l55-12 25 42-47 44q2 9 2 25t-2 25l47 44-25 42-55-12q-12 12-29.5 21.5T731-186l-10 66h-54Zm27-121q36 0 58-22t22-58q0-36-22-58t-58-22q-36 0-58 22t-22 58q0 36 22 58t58 22ZM400-545q39 0 64.5-25.5T490-635q0-39-25.5-64.5T400-725q-39 0-64.5 25.5T310-635q0 39 25.5 64.5T400-545Zm0-90Zm9 411Z" />
              </svg>
              <p>Modifier mon profil</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default UserAside;
