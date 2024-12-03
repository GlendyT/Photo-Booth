import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=" px-4 py-2 bg-black text-white mt-20 ml-2 z-10 absolute  rounded-xl max-sm:ml-2 max-sm:mt-10"
    >
      {"<"}
    </button>
  );
};
