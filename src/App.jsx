import HeroSection from "./components/HeroSection.jsx";
import Nav from "./components/Nav.jsx";
import Features from "./components/Features.jsx";
import FeaturesTabs from "./components/FeaturesTabs.jsx";
import DownloadHeading from "./components/DownloadHeading.jsx";
import DownloadBoxes from "./components/DownloadBoxes.jsx";
import FaqHeading from "./components/FaqHeading.jsx";
import FaqAccordion from "./components/FaqAccordion.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Features />
      <FeaturesTabs />
      <DownloadHeading />
      <DownloadBoxes />
      <FaqHeading />
      <FaqAccordion />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
