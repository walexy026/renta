import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Partner from "./components/Partners/Partner";
import Playstore from "./components/Playstore/Playstore";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <Partner />
      <Stats />
      <Playstore />
      <Footer />
    </div>
  );
}

export default App;
