
import Resultado from "./components/Resultado/Resultado";

function App() {
  return (
    <main className=" relative min-h-screen p-6 max-sm:justify-center items-center max-sm:m-5 max-sm:px-4 max-sm:py-0  bg-backg bg-no-repeat bg-cover bg-center">
     
      <section className="w-full justify-center grid grid-col text-center max-sm:grid-col max-md:gird-col  ">
      <h2 className=" uppercase font-bold text-purple-600 text-2xl max-sm:text-xs ">
        Are you ready for THE FESTA?
      </h2>
      <h3 className="font-bold pb-4 uppercase max-sm:text-xs max-sm:pb-2 max-sm:justify-center text-purple-300" >Image Should be in jpge or png</h3>
      <Resultado/>
    </section>
    </main>
  );
}

export default App;

/*max-md:m-5 max-md:px-4 max-md:py-0 
 max-lg:m-5 max-lg:px-4 max-lg:py-0 
 max-xl:m-5 max-xl:px-4 max-xl:py-0 
 max-2xl:m-5 max-2xl:px-4 max-2xl:py-0 
*/
