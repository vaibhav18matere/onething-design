import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import GetStarted from "./components/GetStarted";
import GetStartedMobile from "./components/GetStartedMobile";
import Header from "./components/Header";
import Eligibility from "./components/Eligibility";
import Rewards from "./components/Rewards";
import CreditCards from "./components/CreditCards";

function App() {
  return (
    <>
      <Header/>
      <GetStarted/>
      <Eligibility/>
      <Rewards/>
      <CreditCards/>
      <GetStartedMobile/>
      <Accordion/>
      <Footer/>
    </>
  );
}

export default App;