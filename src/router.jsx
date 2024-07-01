import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./views/App";
import PhotoBooth from "./components/PhotoBoothStrips/PhotoBooth";
import Card from "./components/Card/Card";
import Background from "./components/Background/Background";
import Navbar from "./navbar/Navbar";
import Hobi from "./components/hobipalloza/Hobi";
import Suga from "./components/sugaverse/Suga";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={< Navbar />}>
          <Route path="/" element={<App />} index />
          <Route path="/polaroid" element={<Card />} />
          <Route path="/photobooth" element={<PhotoBooth />} />
          <Route path="/hobipalooza" element={<Hobi/>} />
          <Route path="/sugaverse" element={<Suga />} />
          <Route path="/rain" element={<Background />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
