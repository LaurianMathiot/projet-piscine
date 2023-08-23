import UserAside from "../../components/admin/UserAside";
import Footer from "../../components/public/Footer";
import ShowFiles from "../../components/user/ShowFiles";
import UserHeader from "../../components/user/UserHeader";

function UserDashboard() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <UserAside />
        <ShowFiles />
      </section>
      <Footer />
    </>
  );
}

export default UserDashboard;
