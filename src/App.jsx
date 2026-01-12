import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ColorSmash from "./policies/coloursmash";
import NumeroPrivacy from "./policies/numero";
import PhoneFitPrivacy from "./policies/phonefit";
import EvomojiPrivacy from "./policies/evomoji";
import GreenLightRedLightPrivacy from "./policies/greenLight";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy/color-smash" element={<ColorSmash />} />
        <Route path="/privacy/numero" element={<NumeroPrivacy />} />
        <Route path="/privacy/phonefit" element={<PhoneFitPrivacy />} />
        <Route path="/privacy/evomoji" element={<EvomojiPrivacy />} />
        <Route path="/privacy/green-light" element={<GreenLightRedLightPrivacy/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;