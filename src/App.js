import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Partner from "./components/Partners/Partner";
import Playstore from "./components/Playstore/Playstore";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Partner />
      <Stats />
      <Playstore />
    </div>
  );
}

export default App;
