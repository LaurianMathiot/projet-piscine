import UserAside from "../../components/admin/UserAside";
import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";

function UserDashboard() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <UserAside />
        <main className="dashboard-main-container"></main>
      </section>
      <Footer />
    </>
  );
}

export default UserDashboard;
