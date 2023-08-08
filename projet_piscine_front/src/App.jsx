import "./App.scss";
import "./Buttons.scss";
import Banner from "./components/public/Banner";
import Bio from "./components/public/Bio";
import Customers from "./components/public/Customers";
import Indicator from "./components/public/Indicator";
import LastWorks from "./components/public/LastWorks";
import PublicHeader from "./components/public/PublicHeader";

function App() {
  return (
    <>
      <PublicHeader />
      <Banner />
      <Indicator />
      <Bio />
      <LastWorks />
      <Customers />
    </>
  );
}

export default App;
