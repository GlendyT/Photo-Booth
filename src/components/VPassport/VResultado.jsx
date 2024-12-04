import useDownload from "../../hooks/useDownload";
import useRequestInfo from "../../hooks/useRequestInfo";
import { VButton } from "./VButton";
import { VCitizenDetail } from "./VCitizenDetail";

export const VResultado = () => {
  const { handleDownloadImage } = useDownload();
  const { usuario, handleResetContent } = useRequestInfo();
  const { name } = usuario;
  return (
    <div className="relative max-sm:text-xs">
      <div className="relative w-96" id="print">
        <VCitizenDetail name={name} />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center pt-4">
        <VButton
          handleDownloadImage={handleDownloadImage}
          handleResetContent={handleResetContent}
        />
      </div>
    </div>
  );
};
