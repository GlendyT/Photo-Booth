import { useState } from "react";
import BingoCard from "../components/Bingo/BingoCard";
import { menuItems } from "../components/Bingo/Data";
import useDownload from "../hooks/useDownload";
import { ButtonUtils } from "../components/utils/ButtonUtils";

export default function Bingo() {
  const { handleDownloadImage } = useDownload();
  const [clickedItems, setClickedItems] = useState(
    Array(menuItems.length).fill(false)
  );

  const handleItemClick = (index) => {
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);
  };

  const resetClickedItems = () => {
    setClickedItems(Array(menuItems.length).fill(false));
  };
  return (
    <>
      <div className="min-h-screen relative flex flex-col justify-center items-center bg-bingoback bg-center bg-no-repeat bg-cover ">
        <div
          className="mx-96 max-sm:mx-0 max-sm:px-0 max-lg:mx-20 max-xl:mx-44 border-2 border-gray-200  bg-purple-400 max-sm:mt-16 "
          id="print"
        >
          <div className="bg-bingo2 h-32 bg-center bg-no-repeat bg-contain"></div>
          <div className="grid grid-cols-5 text-sm mx-2 mb-2 bg-white text-center ">
            {menuItems.map((item, index) => (
              <BingoCard
                key={item.name}
                item={item}
                isClicked={clickedItems[index]}
                handleClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center pt-2 gap-2">
          <ButtonUtils
            label="Another"
            onClick={resetClickedItems}
            bgColor="bg-purple-950"
            textColor="text-white"
            hoverColor="hover:bg-violet-800 "
          />

          <ButtonUtils
            label="Download"
            onClick={handleDownloadImage}
            bgColor="bg-purple-950"
            textColor="text-white"
            hoverColor="hover:bg-violet-800 "
          />
        </div>
      </div>
    </>
  );
}
