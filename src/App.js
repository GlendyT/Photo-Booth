//import { useState } from "react";
import AdsComponent from "./components/GoogleAd/AdsComponent";
import PhotoBooth from "./components/PhotoBoothStrips/PhotoBooth";


function App() {

  /*
  const [selectedOption, setSelectedOption] = useState(null);

  const handleComponentSelect = (component) => {
    setSelectedOption(component);
  };*/

  return (
    <main
      className="relative min-h-screen px-6 pt-1 max-sm:justify-center max-sm:m-0 max-sm:px-4 max-sm:py-2 bg-backg bg-center bg-cover bg-no-repeat"
    >
      <section className="w-full justify-center grid grid-col text-center max-sm:grid-col max-md:gird-col  ">
        <PhotoBooth />

        <span className="" >
        <AdsComponent dataAdSlot='X7XXXXXX5X'/>
        </span>
      </section>

    </main>
  );
}

export default App;

/*max-md:m-5 max-md:px-4 max-md:py-0 
 max-lg:m-5 max-lg:px-4 max-lg:py-0 
 max-xl:m-5 max-xl:px-4 max-xl:py-0 
 max-2xl:m-5 max-2xl:px-4 max-2xl:py-0 

  max-sm:justify-center max-sm:m-0 max-sm:px-4 max-sm:py-2

  grid grid-col text-center max-sm:grid-col max-md:gird-col

  bg-backg3 bg-no-repeat bg-cover bg-center

          <h2 className=" uppercase font-bold text-purple-500 text-2xl max-sm:text-xs ">
          Are you ready for THE FESTA?
        </h2>
        <h3 className="font-bold pb-4 uppercase max-sm:text-xs max-sm:pb-2 max-sm:justify-center text-purple-300">
          Image Should be in jpge or png
        </h3>

  
*/
