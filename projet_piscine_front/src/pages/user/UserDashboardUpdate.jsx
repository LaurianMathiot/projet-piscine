import Footer from "../../components/public/Footer";
import UserAside from "../../components/user/UserAside";
import UserHeader from "../../components/user/UserHeader";
import UserUpdate from "../../components/user/UserUpdate";

function UserDashboardUpdate() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <UserAside />
        <UserUpdate />
      </section>
      <Footer />
    </>
  );
}

export default UserDashboardUpdate;
