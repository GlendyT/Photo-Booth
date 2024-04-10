import Background from "./components/Background/Background";
import Uploader from "./components/Uploader";

function App() {
  return (
    <main className=" relative min-h-screen p-6 sm:justify-center items-center max-sm:m-5 ">
      <Background />
      <Uploader />
    </main>
  );
}

export default App;
