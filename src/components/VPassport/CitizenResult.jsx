import React from "react";
import { CitizenDetail } from "./CitizenDetailInside/CitizenDetail";
import useDownload from "../../hooks/useDownload";
import { ButtonCitizen } from "./ButtonCitizen";

export default function CitizenResult({citizen, setCitizen}) {

  const { handleDownloadImage } = useDownload()

  const handleRestart = () => {
    setCitizen({})
  }
  return (
    <>
      <div className="flex items-center justify-center pt-20 pb-4 max-sm:pb-36 ">
        <div className="flex flex-row bg-transparent" id="print">
          <CitizenDetail citizen={citizen}/>
        </div>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center">
        <ButtonCitizen handleDownloadImage={handleDownloadImage} handleRestart={handleRestart}/>
      </div>
    </>
  );
}
