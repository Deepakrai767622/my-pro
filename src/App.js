import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomeSection from "./components/HomeSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Wireframe from "./components/projects/Wireframe";
import Ui_ux from "./components/projects/Ui_ux";
import Reactjs from "./components/projects/Reactjs";
import Jquery from "./components/projects/Jquery";
import Javascript from "./components/projects/Javascript";
import Front from "./components/projects/Front";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/wireframe" element={<Wireframe />} />
            <Route path="/projects/ui_ux" element={<Ui_ux />} />
            <Route path="/projects/react" element={<Reactjs />} />
            <Route path="/projects/jquery" element={<Jquery />} />
            <Route path="/projects/javascript" element={<Javascript />} />
            <Route path="/projects/front" element={<Front />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
