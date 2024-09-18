import React, { useState } from "react";
import { FormularioVPassport } from "../components/VPassport/FormularioVPassport";
import CitizenResult from "../components/VPassport/CitizenResult";

export default function Vpassport() {
  const [citizen, setCitizen] = useState([]);
  return (
    <div className="">
      {!citizen.length > 0 ? (
        <FormularioVPassport setCitizen={setCitizen} />
      ) : (
        <CitizenResult citizen={citizen} setCitizen={setCitizen} />
      )}
    </div>
  );
}
