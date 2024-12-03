import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { injectSpeedInsights } from "@vercel/speed-insights";
import { Analytics } from "@vercel/analytics/react";
import App from "./views/App";
import PhotoBooth from "./views/PhotoBooth";
import Card from "./components/Card/Card";
import { DownloadProvider } from "./context/DownloadProvider";
import { RequestInfoProvider } from "./context/RequestInfoProvider";
import { FishProvider } from "./context/FishProvider";
import Navbar from "./navbar/Navbar";
import Hobi from "./views/Hobi";
import Suga from "./views/Suga";
import Bingo from "./views/Bingo";
import Vpassport from "./views/Vpassport";
import Hobisback from "./views/Hobisback";
import Fishing from "./views/Fishing";

export default function Router() {
  return (
    <BrowserRouter>
      <DownloadProvider>
        <RequestInfoProvider>
          <FishProvider>
            <Analytics />
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

                <Route path="/seokjin" element={<Fishing />} />
              </Route>
            </Routes>
          </FishProvider>
        </RequestInfoProvider>
      </DownloadProvider>
    </BrowserRouter>
  );
}
