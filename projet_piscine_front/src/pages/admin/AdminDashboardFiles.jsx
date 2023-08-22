import AdminAside from "../../components/admin/AdminAside";
import FilesGestionnary from "../../components/admin/FilesGestionnary";
import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";

function AdminDashboardFiles() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <AdminAside />
        <main className="dashboard-main-container">
          <FilesGestionnary />
        </main>
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboardFiles;
