import { useState } from "react";
import Card from "./components/Card/Card";
import PhotoBooth from "./components/PhotoBoothStrips/PhotoBooth";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleComponentSelect = (component) => {
    setSelectedOption(component);
  };

  return (
    <main className=" relative min-h-screen p-4 flex bg-backg3 bg-no-repeat bg-cover bg-center ">
      <div className=" w-1/4 p-2 grid items-center justify-center content-center ">
        <button
          className="bg-violet-950 text-white px-4 py-2 rounded mb-4"
          onClick={() => handleComponentSelect("PhotoBooth")}
          disabled={selectedOption === "PhotoBooth"}
        >
          PhotoBooth
        </button>
        <button
          className="bg-violet-950 text-white px-4 py-2 rounded"
          onClick={() => handleComponentSelect("Card")}
          disabled={selectedOption === "Card"}
        >
          Carrd
        </button>
      </div>
      <div className="w-3/4 ">
        {selectedOption === "PhotoBooth" && <PhotoBooth />}
        {selectedOption === "Card" && <Card />}
      </div>
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

  
*/
