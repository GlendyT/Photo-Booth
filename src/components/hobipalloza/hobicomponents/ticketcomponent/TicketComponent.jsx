import hw from "../../../img/2.avif";

export default function TicketComponent({
  user,
  albu,
  song,
}) {
  return (
    <div className=" w-10/12 h-96 bg-none max-sm:w-full " >
      <div className="relative w-full h-96 bg-transparent "   id="print"  >
      <img
            src={hw}
            alt=""
            className=" absolute inset-4 h-96 max-sm:h-36 max-md:h-80 max-lg:h-80 max-xl:h-96 max-2xl:h-96"
          />
        <div className="absolute flex flex-col justify-end w-10/12 h-full inset-0 px-20 pb-32 bg-transparent max-sm:h-24 max-sm:w-full max-sm:pb-0 max-sm:pt-20 max-sm:px-10 " >

          <div className=" absolute inset-auto "></div>
          <p className="z-10 mt-1 text-xl font-bold max-sm:text-xs  max-md:text-sm  text-white">
            Name: {user}
          </p>
          <p className="z-10 mt-1 text-xl font-bold text-white max-sm:text-xs  max-md:text-sm">
            Country: {albu}
          </p>
          <p className="z-10 mt-1 text-xl font-bold text-white max-sm:text-xs  max-md:text-sm">
            Location: {song}
          </p>
        </div>
      </div>
    </div>
  );
}


/*max-sm:pb-72 max-sm:pl-10 max-sm:pr-20 max-md:pb-44 max-md:px-10 max-lg:pb-44*/