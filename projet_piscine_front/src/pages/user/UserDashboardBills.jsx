import UserAside from "../../components/user/UserAside";
import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";
import ShowBills from "../../components/user/ShowBills";

function UserDashboardBills() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <UserAside />
        <ShowBills />
      </section>
      <Footer />
    </>
  );
}

export default UserDashboardBills;
