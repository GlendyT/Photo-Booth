import { useContext } from "react";
import DownloadContext from "../context/DownloadProvider";

const useDownload = () => {
    return useContext(DownloadContext)
}
export default useDownload