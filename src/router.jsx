import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import { DownloadProvider } from "./context/DownloadProvider";
import { RequestInfoProvider } from "./context/RequestInfoProvider";
import { ImageCropProvider } from "./context/ImageCropProviders";
import { FishProvider } from "./context/FishProvider";
import { PhotoBoothProvider } from "./context/PhotoboothProvider";

import App from "./views/App";
import Card from "./components/Card/Card";
import Navbar from "./navbar/Navbar";
import Hobi from "./views/Hobi";
import Suga from "./views/Suga";
import Bingo from "./views/Bingo";
import Vpassport from "./views/Vpassport";
import Hobisback from "./views/Hobisback";
import Fishing from "./views/Fishing";
import Photobooth from "./views/Photobooth";
import Memorygame from "./views/Memorygame";
import { FlipProvider } from "./context/FlipProvider";
import BalenTineS from "./views/BalenTineS";
import RPS from "./views/RPS";
import { RPSProvider } from "./context/RPSProvider";

export default function Router() {
  return (
    <BrowserRouter>
      <DownloadProvider>
        <RequestInfoProvider>
          <FishProvider>
            <ImageCropProvider>
              <PhotoBoothProvider>
                <Analytics />
                <Routes>
                  <Route element={<Navbar />}>
                    <Route path="/" element={<App />} index />
                    <Route path="/polaroid" element={<Card />} />
                    <Route path="/photobooth" element={<Photobooth />} />
                    <Route path="/sugaverse" element={<Suga />} />
                    <Route path="/hobipalooza" element={<Hobi />} />
                    <Route path="/bingo" element={<Bingo />} />
                    <Route path="/vpassport" element={<Vpassport />} />
                    <Route path="/hopeisback" element={<Hobisback />} />
                    <Route path="/seokjin" element={<Fishing />} />
                    <Route
                      path="/(V)irthday"
                      element={
                        <FlipProvider>
                          <Memorygame />
                        </FlipProvider>
                      }
                    />
                    <Route path="/Love Notes" element={<BalenTineS />} />
                    <Route
                      path="/piedra"
                      element={
                        <RPSProvider>
                          <RPS />
                        </RPSProvider>
                      }
                    />
                  </Route>
                </Routes>
              </PhotoBoothProvider>
            </ImageCropProvider>
          </FishProvider>
        </RequestInfoProvider>
      </DownloadProvider>
    </BrowserRouter>
  );
}
