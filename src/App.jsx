import HeroSection from "./components/HeroSection.jsx";
import Nav from "./components/Nav.jsx";
import Features from "./components/Features.jsx";
import FeaturesTabs from "./components/FeaturesTabs.jsx";
import DownloadHeading from "./components/DownloadHeading.jsx";
import DownloadBoxes from "./components/DownloadBoxes.jsx";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Features />
      <FeaturesTabs />
      <DownloadHeading />
      <DownloadBoxes />
    </>
  );
}

export default App;
