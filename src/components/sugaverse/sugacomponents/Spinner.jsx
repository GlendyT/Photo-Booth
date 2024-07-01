


const Spinner = () => {
  return (
    <div className=" flex flex-col  text-white pt-20  max-sm:text-xs">
      <div className="relative sm:max-w-sm w-full text-center">
        <div className="relative w-full px-10 py-4 shadow-md max-sm:px-10 max-sm:py-8 ">
          <span className="loader"></span>
        </div>
        <div className="relative w-full px-10 py-4 shadow-md max-sm:px-10 max-sm:py-8">
          <span className="loader1"></span>
        </div>
        <div className="relative w-full px-10 py-4 shadow-md max-sm:px-10 max-sm:py-8">
          <span className="loader2"></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
