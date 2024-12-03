import { useNavigate } from "react-router-dom";
import ScheduledImage from "../components/FishingKSJ/RevealImage/ScheduledImage";

const Calendar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-pink-700">
      <button
        onClick={() => navigate(-1)}
        className=" px-4 py-2 bg-black text-white mt-20 ml-2 z-10 absolute  rounded-xl max-sm:mt-10 max-sm:ml-2.5"
      >
        {"<"}
      </button>
      <div className="flex flex-col items-center m-auto gap-6 ">
        <ScheduledImage />
      </div>
    </div>
  );
};

export default Calendar;
