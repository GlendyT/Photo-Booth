import CardRPS from "../components/RPS/CardRPS";

export default function RPS() {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-red-500 rounded-xl p-4">
          <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>

          <CardRPS />
        </div>
      </div>
    </div>
  );
}
