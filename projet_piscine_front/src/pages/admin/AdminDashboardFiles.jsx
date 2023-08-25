import AdminAside from "../../components/admin/AdminAside";
import FilesGestionnary from "../../components/admin/FilesGestionnary";
import ReviewsAside from "../../components/user/ReviewsAside";
import Footer from "../../components/public/Footer";
import UserHeader from "../../components/user/UserHeader";

function AdminDashboardFiles() {
  return (
    <>
      <UserHeader />
      <section className="dashboard flex">
        <AdminAside />
        <FilesGestionnary />
        <ReviewsAside />
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboardFiles;
