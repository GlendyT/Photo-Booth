import { useState } from "react";

export const FormularioVPassport = ({ setCitizen }) => {
  const [ciudadano, setCiudadano] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ciudadano === "") {
      setError(true);
      return;
    }
    setError(false);
    setCitizen([ciudadano]);
  };
  return (
    <div className="flex flex-col sm:justify-center items-center text-white max-sm:text-xs">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-10 py-4 max-sm:px-10 max-sm:py-10">
          <form
            className="backdrop-blur-xl bg-black/50 rounded-xl p-4 mt-5 text-white max-sm:text-xs"
            onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label
                htmlFor="name"
                className="text-sm text-black hover:text-white uppercase font-bold flex justify-center pb-4"
              >
                GET YOUR PASSPORT
              </label>
              <input
                id="name"
                value={ciudadano}
                onChange={(e) => setCiudadano(e.target.value)}
                className="w-full p-3 text-black  border border-gray-100 rounded-md"
                type="text"
                placeholder="YOUR NAME"
              />
              {error && (
                <p className="text-white text-center font-bold uppercase font-dmmono pt-1 text-xs bg-blue-950 mt-2 rounded-sm px-2">
                  All questions must be filled out
                </p>
              )}
            </div>

            <input
              type="submit"
              className="bg-blue-950 w-full p-3 text-white uppercase font-bold hover:bg-purpleButton cursor-pointer transition-colors rounded-md"
              value="GENERATE"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
