import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import "./App.css";
import Notepad from "./components/Notepad";
// import PropsDrilling from "./pages/PropsDrilling";
import ContextData from "./pages/ContextData";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/routers/Home";
import About from "./components/routers/About";
import Contact from "./components/routers/Contact";
import Navbar from "./components/routers/Navbar";
import Footer from "./components/routers/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseRef /> */}
      {/* <Notepad /> */}
      {/* <PropsDrilling /> */}
      {/* <ContextData /> */}

      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
