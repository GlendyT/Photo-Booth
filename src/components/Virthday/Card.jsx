import useFlip from "../../hooks/useFlip";

const Card = ({ item }) => {
  const { onCardClick, isFlipped } = useFlip();
  

  return (
    <div
      className="w-24 h-24 group perspective max-sm:h-16 max-sm:w-16 font-quatt   "
      onClick={() => onCardClick(item)}
    >
      <div
        className={`relative preserve-3d w-full h-full duration-1000 ${
          isFlipped(item) ? "my-rotate-y-180  " : ""
        }`}
      >
        <div
          className={`absolute bg-v bg-center bg-cover overflow-hidden inset-0 backface-hidden max-sm:pb-2 max-sm:px-4`}
        ></div>

        <div
          className={`absolute backface-hidden w-full h-full overflow-hidden my-rotate-y-180 `}
        >
          <img
            src={item.img}
            alt=""
            className={`absolute inset-0 backface-hidden object-contain transition-colors ${
              item.price === "wrong" ? "border-8 border-red-600" : "border-8 border-green-600"
            }`}
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default Card;