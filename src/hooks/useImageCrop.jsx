import { useContext } from "react";
import ImageCropContext from "../context/ImageCropProviders";


const useImageCrop = () => {
    return useContext(ImageCropContext)
}

export default useImageCrop