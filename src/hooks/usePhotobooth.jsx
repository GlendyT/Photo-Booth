import { useContext } from "react";
import PhotoBoothContext from "../context/PhotoboothProvider";

const usePhotobooth = () => {
  return useContext(PhotoBoothContext);
};

export default usePhotobooth;
