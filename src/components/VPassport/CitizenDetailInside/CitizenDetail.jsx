
import CitizenPage1 from "./CitizenPage1"
import {citiesVisited} from "../data/Cities.js"
import rightSide from "../imgVPassport/Passport Image Generated Right Side.webp"
import CitizenDetailItem from "./CitizenDetailItem.jsx";


export const CitizenDetail = ({citizen}) => {
    const randomIndex = Math.floor(Math.random() * citiesVisited.length);
    const randomCity = citiesVisited[randomIndex];
    const {image, stamp} = randomCity

  return (
    <>
    <CitizenPage1 image={image} />
    <div className="  shadow-md rounded-xl w-72 h-50 max-sm:w-44  ">
      <div className="relative w-full h-full ">
        <div className="absolute flex flex-col justify-center w-full h-full inset-0 pr-8 pb-24 max-sm:pb-10 max-sm:pr-4 ">
          <img
            src={rightSide}
            alt=""
            className=" absolute inset-0 object-cover  w-full"
          />
          <div className=" absolute inset-0 ">
            <img src={stamp} alt="" className="-rotate-90 relative pt-24 px-14 m-10 max-sm:pt-0 max-sm:m-0 max-sm:px-0 max-sm:w-14" />
          </div>
          <div className=" -rotate-90">
            <p className="flex text-center justify-center items-center font-michroma font-extrabold pb-6 text-xs uppercase max-sm:text-[9px]">
              Republic of ARMY
            </p>
            <div className="flex flex-row-3 gap-3 pl-4">
              <div className="grid gap-2">
                <CitizenDetailItem
                  label="Apellidos/Surname"
                  data={"BORAHAE"}
                />
                <CitizenDetailItem label="Names" data={citizen} />
                <CitizenDetailItem label="Nacionality" data={"ARMY"} />
              </div>
              <div className="grid gap-2">
                <CitizenDetailItem label="DateOfBirth" data={"13/06/2013"} />
                <CitizenDetailItem label="PlaceOfBirth" data={"KOREA"} />
                <CitizenDetailItem
                  label="PassportNumber"
                  data={"THV-31-12-1995"}
                />
                <CitizenDetailItem label="VisaType" data={"PERMANENT"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
