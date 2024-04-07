import Slider from "./Slider/Slider";
import Uploader from "./components/Uploader";

function App() {
  return (
    <main className=" w-full h-full px-8 py-10 bg-purple-300">
      <div className="m-auto grid grid-cols-2 gap-2"> 
      <Uploader />
      <Slider />
      </div>
    </main>
  );
}

export default App;
