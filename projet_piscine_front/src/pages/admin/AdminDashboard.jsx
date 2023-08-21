import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";
import AdminAside from "../../components/admin/AdminAside";
import UploadForm from "../../components/admin/UploadForm";

function AdminDashboard() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <AdminAside />
        <main className="dashboard-main-container">
          <UploadForm />
        </main>
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboard;
