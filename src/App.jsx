import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ColorSmash from "./policies/coloursmash";
import NumeroPrivacy from "./policies/numero";
import PhoneFitPrivacy from "./policies/phonefit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy/color-smash" element={<ColorSmash />} />
        <Route path="/privacy/numero" element={<NumeroPrivacy />} />
        <Route path="/privacy/phonefit" element={<PhoneFitPrivacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
