import useReveal from "../../../hooks/useReveal";
import { weekdays } from "./Data";

function ScheduledImage() {
  const {
    itIsMidnight,
    padNumber,
    timeLeft,
    currentDayIndex,
    allImagesDisplayed,
  } = useReveal();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {itIsMidnight ? (
        <></>
      ) : (
        <div className="flex p-4 max-sm:px-4 max-sm:mt-14">
          <div className="grid grid-cols-7  gap-4 mt-4 max-sm:grid-cols-2 max-lg:grid-cols-3">
            {weekdays.map((weekday, index) => {
              const isImageVisible =
                index <= currentDayIndex || allImagesDisplayed;

              return (
                <div
                  key={index}
                  className=" border-2 border-black flex flex-col justify-center"
                >
                  <h2 className="text-center font-extrabold text-lg">
                    {weekday.day}
                  </h2>
                  {!isImageVisible && (
                    <div className="flex flex-col items-start px-2">
                      <b>{padNumber(timeLeft.hours)} hora(s)</b>
                      <b>{padNumber(timeLeft.minutes)} minutos</b>
                      <b>{padNumber(timeLeft.seconds)} segundos</b>
                    </div>
                  )}

                  <div
                    className={`image-container ${
                      isImageVisible ? "visible" : "invisible"
                    }`}
                  >
                    <img src={weekday.image} alt={weekday.day} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduledImage;
