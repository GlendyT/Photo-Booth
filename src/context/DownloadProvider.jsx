import html2canvas from "html2canvas";
import { createContext } from "react";

const DownloadContext = createContext()

const DownloadProvider = ({ children}) => {


    const handleDownloadImage = async () => {
        const element = document.getElementById("print");
        if (!element) return;
    
        const options = {
          scale: 3,
        };
        const canvas = await html2canvas(element, options);
        const data = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
    
        link.href = data;
        link.download = "BTS+ARMY";
    
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);
      };


    return (
        <DownloadContext.Provider
         value={{
            handleDownloadImage
         }}
        >
            {children}
        </DownloadContext.Provider>
    )
}

export { DownloadProvider}

export default DownloadContext