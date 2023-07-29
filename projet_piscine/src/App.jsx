import "./App.css";
import Banner from "./Banner";
import Bio from "./Bio";
import Customers from "./Customers";
import Header from "./Header";
import Indicator from "./Indicator";
import LastWorks from "./LastWorks";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Indicator />
      <Bio />
      <LastWorks />
      <Customers />
    </>
  );
}

export default App;
