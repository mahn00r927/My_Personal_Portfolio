import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Components/About";
import ContactPage from "./Components/Contact";
import HeroBanner from "./Components/HeroSections";
import Services from "./Components/MyServices";
import "./App.css";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutPage />
      <Services />
      <Skills />
      <Projects/>
      <ContactPage />
    </>
  );
}
export default App;
