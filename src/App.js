import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import SemiconductorServices from "./pages/SemiconductorServices";
import ASICDesign from "./pages/ASICDesign";
import EmbeddedEngineeringService from "./pages/EmbeddedEngineeringService";
import Software from "./pages/Software";
import VerificationIps from "./pages/VerificationIps";
import EmbeddedProduct from "./pages/EmbeddedProduct";
import Partners from "./pages/Partners";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/SemiconductorServices"
            element={<SemiconductorServices />}
          />
          <Route path="/ASICDesign" element={<ASICDesign />} />
          <Route path="/EmbeddedEngineeringService" element={<EmbeddedEngineeringService />} />
          <Route path="/Software" element={<Software />} />
          <Route path="/VerificationIps" element={<VerificationIps />} />
          <Route path="/EmbeddedProduct" element={<EmbeddedProduct />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
