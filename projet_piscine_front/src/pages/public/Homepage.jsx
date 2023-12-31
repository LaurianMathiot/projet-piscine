import Banner from "../../components/public/Banner";
import Bio from "../../components/public/Bio";
import Customers from "../../components/public/Customers";
import Indicator from "../../components/public/Indicator";
import PublicHeader from "../../components/public/PublicHeader";
import Skills from "../../components/public/Skills";
import "../../App.scss";
import Footer from "../../components/public/Footer";

function HomePage() {
  return (
    <>
      <PublicHeader />
      <Banner />
      <Indicator />
      <Bio />
      {/* <LastWorks /> */}
      <Skills />
      <Customers />
      <Footer />
    </>
  );
}

export default HomePage;
