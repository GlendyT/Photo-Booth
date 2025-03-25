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
import LoveNotes from "./views/LoveNotes";
import RPS from "./views/RPS";
import { RPSProvider } from "./context/RPSProvider";

export default function Router() {
  return (
    <BrowserRouter>
      <DownloadProvider>
        <RequestInfoProvider>
          <Analytics />
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<App />} index />
              <Route path="/polaroid" element={<Card />} />
              <Route
                path="/photobooth"
                element={
                  <ImageCropProvider>
                    <PhotoBoothProvider>
                      {" "}
                      <Photobooth />
                    </PhotoBoothProvider>
                  </ImageCropProvider>
                }
              />
              <Route path="/sugaverse" element={<Suga />} />
              <Route path="/hobipalooza" element={<Hobi />} />
              <Route path="/bingo" element={<Bingo />} />
              <Route path="/vpassport" element={<Vpassport />} />
              <Route path="/hopeisback" element={<Hobisback />} />

              <Route
                path="/seokjin"
                element={
                  <FishProvider>
                    <Fishing />
                  </FishProvider>
                }
              />
              <Route
                path="/(V)irthday"
                element={
                  <FlipProvider>
                    <Memorygame />
                  </FlipProvider>
                }
              />
              <Route path="/lovenotes" element={<LoveNotes />} />
              <Route
                path="/rps"
                element={
                  <RPSProvider>
                    <RPS />
                  </RPSProvider>
                }
              />
            </Route>
          </Routes>
        </RequestInfoProvider>
      </DownloadProvider>
    </BrowserRouter>
  );
}
