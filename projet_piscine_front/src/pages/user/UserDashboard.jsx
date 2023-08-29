import UserAside from "../../components/user/UserAside";
import Footer from "../../components/public/Footer";
import ShowFiles from "../../components/user/ShowFiles";
import UserHeader from "../../components/user/UserHeader";
import ReviewsAside from "../../components/user/ReviewsAside";

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
