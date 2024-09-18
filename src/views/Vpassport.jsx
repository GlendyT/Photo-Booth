import React, { useState } from "react";
import { FormularioVPassport } from "../components/VPassport/FormularioVPassport";
import CitizenResult from "../components/VPassport/CitizenResult";

export default function Vpassport() {
  const [citizen, setCitizen] = useState([]);
  return (
    <div
      className={`min-h-screen bg-center bg-no-repeat bg-cover pt-16 ${
        citizen.length > 0
          ? "bg-largeScreen2  max-sm:bg-smallScreen"
          : "bg-largeScreen  max-sm:bg-smallScreen2"
      }`}
    >
      <div className="flex flex-col items-center">
        {!citizen.length > 0 ? (
          <FormularioVPassport setCitizen={setCitizen} />
        ) : (
          <CitizenResult citizen={citizen} setCitizen={setCitizen} />
        )}
      </div>
    </div>
  );
}