import useDownload from "../../hooks/useDownload";
import { VButton } from "./VButton";
import { VCitizenDetail } from "./VCitizenDetail";

export const VResultado = ({ citizen, setCitizen }) => {
  const { handleDownloadImage } = useDownload();

  const handleRestart = () => {
    setCitizen({});
  };

  return (
    <div className="relative max-sm:text-xs">
      <div className="relative w-96" id="print">
        <VCitizenDetail citizen={citizen} setCitizen={setCitizen} />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center pt-4">
        <VButton
          handleDownloadImage={handleDownloadImage}
          handleRestart={handleRestart}
        />
      </div>
    </div>
  );
};
