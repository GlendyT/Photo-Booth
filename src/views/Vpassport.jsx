import React, { useState } from "react";
import { FormularioVPassport } from "../components/VPassport/FormularioVPassport";
import CitizenResult from "../components/VPassport/CitizenResult";

export default function Vpassport() {
  const [citizen, setCitizen] = useState([]);
  return (
    <div className="min-h-screen pt-16  bg-backmain  bg-cover bg-no-repeat max-sm:bg-center ">
      <div className="flex flex-col justify-center items-center p-44">
        <p className="  text-white text-5xl font-extrabold text-center">
          Coming Soon....
        </p>
      </div>
    </div>
  );
}