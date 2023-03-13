import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Partner from "./components/Partners/Partner";
import Playstore from "./components/Playstore/Playstore";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Stats from "./components/Stats/Stats";
import Waitlist from "./components/Waitlist/Waitlist";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <Partner />
      <Stats />
      <Faq />
      <Waitlist />
      {/* <Playstore /> */}
      <Footer />
    </div>
  );
}

export default App;
