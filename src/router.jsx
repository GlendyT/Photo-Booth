import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./views/App";
import PhotoBooth from "./views/PhotoBooth";
import Card from "./components/Card/Card";
//import Background from "./components/Background/Background";
import Navbar from "./navbar/Navbar";
import Hobi from "./views/Hobi";
import { DownloadProvider } from "./context/DownloadProvider";
import Suga from "./views/Suga";
import Bingo from "./views/Bingo";
import Vpassport from "./views/Vpassport";
import Hobisback from "./views/Hobisback";

export default function Router() {
 
  return (
    <BrowserRouter>
      <DownloadProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<App />} index />
            <Route path="/polaroid" element={<Card />} />
            <Route path="/photobooth" element={<PhotoBooth />} />
            <Route path="/sugaverse" element={<Suga />} />
            <Route path="/hobipalooza" element={<Hobi />} />
            <Route path="/bingo" element={<Bingo />} />
            <Route path="/vpassport" element={<Vpassport />} />
            <Route path="/hopeisback" element={<Hobisback />} />
          </Route>
        </Routes>
      </DownloadProvider>
    </BrowserRouter>
  );
}

/*              <Route path="/rain" element={<Background />} />*/
