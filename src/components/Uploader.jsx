import React from "react";
import Resultado from "./Resultado/Resultado";

const Uploader = () => {

  return (
    <section className="w-full justify-center grid grid-col text-center">
      <h2 className=" uppercase font-bold text-yellow text-2xl">
        Are you ready for FESTA?
      </h2>
      <div className="font-bold pb-4 uppercase" >Image Should be in jpge or png</div>
      <Resultado/>
    </section>
  );
};

export default Uploader;
