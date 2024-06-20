//import PhotoBooth from "./components/PhotoBoothStrips/PhotoBooth";

import Card from "./components/Card/Card";


function App() {
  return (
    <main className="relative min-h-screen px-6 pt-1 pb-20 max-sm:justify-center max-sm:m-0 max-sm:px-4 max-sm:py-2 bg-backg bg-center bg-cover bg-no-repeat">
      <section className="w-full justify-center grid grid-col text-center max-sm:grid-col max-md:gird-col  ">
        <Card/>
      </section>
    </main>
  );
}

export default App;
