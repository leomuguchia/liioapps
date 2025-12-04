import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ColorSmash from "./policies/coloursmash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy/color-smash" element={<ColorSmash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
