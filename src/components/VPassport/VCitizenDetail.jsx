import { citiesVisited } from "./Cities.js";
import rightSide from "./imgVPassport/Passport Image Generated Right Side.webp";
import VCitizenDetailItem from "./VCitizenDetailItem.jsx";
import VCitizenPage1 from "./VCitizenPage1.jsx";

export const VCitizenDetail = ({ citizen }) => {
  const randomIndex = Math.floor(Math.random() * citiesVisited.length);
  const randomCity = citiesVisited[randomIndex];
  const { image, stamp } = randomCity;

  return (
    <div className="flex flex-row">
      <VCitizenPage1 image={image} />
      <div className="  shadow-md rounded-xl w-72 h-50 max-sm:w-44  ">
        <div className="relative w-full h-full ">
          <div className="absolute flex flex-col justify-center w-full h-full inset-0 pr-2 pb-10 max-sm:pb-10 max-sm:pr-4 ">
            <img
              src={rightSide}
              alt=""
              className=" absolute inset-0 object-cover  w-full"
            />
             <div className=" absolute inset-0 max-sm:hidden ">
              <img
                src={stamp}
                alt=""
                className="-rotate-90 relative pt-24 px-14 m-10 max-sm:pt-0 max-sm:m-0 max-sm:px-0 max-sm:w-14"
              />
            </div> 
            <div className=" -rotate-90">
              <p className="flex text-center justify-center items-center font-michroma font-extrabold pb-4 text-xs uppercase max-sm:text-[9px] max-sm:pb-0">
                Republic of ARMY
              </p>
              <div className="flex flex-row-3 gap-3 pl-6 max-sm:pl-8 max-sm:gap-1">
                <div className="grid gap-2 max-sm:gap-0">
                  <VCitizenDetailItem
                    label="Apellidos/Surname"
                    data={"BORAHAE"}
                  />
                  <VCitizenDetailItem label="Names" data={citizen} />
                  <VCitizenDetailItem label="Nacionality" data={"ARMY"} />
                </div>
                <div className="grid gap-2 max-sm:gap-0">
                  <VCitizenDetailItem label="DateOfBirth" data={"13/06/2013"} />
                  <VCitizenDetailItem label="PlaceOfBirth" data={"KOREA"} />
                  <VCitizenDetailItem
                    label="PassportNumber"
                    data={"THV-31-12-1995"}
                  />
                  <VCitizenDetailItem label="VisaType" data={"PERMANENT"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};