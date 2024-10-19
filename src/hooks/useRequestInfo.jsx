import { useContext } from "react";
import RequestInfoContext from "../context/RequestInfoProvider";

const useRequestInfo = () => {
  return useContext(RequestInfoContext);
};

export default useRequestInfo;
