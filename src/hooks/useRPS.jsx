import { useContext } from "react";
import RPSContext from "../context/RPSProvider";

const useRPS = () => {
  return useContext(RPSContext);
};
export default useRPS;
