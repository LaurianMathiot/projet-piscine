import AdminAside from "../../components/admin/AdminAside";
import AdminUsersGestionnary from "../../components/admin/AdminUsersGestionnary";
import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";

function AdminDashboardUsers() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <AdminAside />
        <AdminUsersGestionnary />
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboardUsers;
