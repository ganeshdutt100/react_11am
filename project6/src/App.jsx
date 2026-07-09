import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import "./App.css";
import Notepad from "./components/Notepad";
import PropsDrilling from "./pages/PropsDrilling";
import ContaxtData from "./pages/ContextData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseRef /> */}
      {/* <Notepad /> */}
      {/* <PropsDrilling /> */}
      <ContaxtData />
    </>
  );
}

export default App;
