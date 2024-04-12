import Background from "./components/Background/Background";
import Resultado from "./components/Resultado/Resultado";

function App() {
  return (
    <main className=" relative min-h-screen p-6 max-sm:justify-center items-center max-sm:m-5 max-sm:px-4 max-sm:py-0">
      <Background />
      <section className="w-full justify-center grid grid-col text-center max-sm:grid-col  ">
      <h2 className=" uppercase font-bold text-yellow text-2xl max-sm:text-xs ">
        Are you ready for FESTA?
      </h2>
      <h3 className="font-bold pb-4 uppercase max-sm:text-xs max-sm:pb-2 " >Image Should be in jpge or png</h3>
      <Resultado/>
    </section>
    </main>
  );
}

export default App;
