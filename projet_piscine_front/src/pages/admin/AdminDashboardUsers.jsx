import AdminAside from "../../components/admin/AdminAside";
import UsersGestionnary from "../../components/admin/UsersGestionnary";
import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";

function AdminDashboardUsers() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <AdminAside />
        <UsersGestionnary />
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboardUsers;
