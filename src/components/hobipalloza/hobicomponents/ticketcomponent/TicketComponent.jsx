import hw from "../../../img/1.png";

export default function TicketComponent({ user, albu, song }) {
  return (
    <main className="w-screen h-screen flex flex-col">
	<section className="w-full flex-grow  flex items-center justify-center p-4">
		<div className="flex w-full max-w-3xl text-zinc-50 h-64">
			<div className="h-full  bg-dragimg1 flex items-center justify-center px-8 rounded-l-3xl">
				
			</div>
			<div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50">
				<div className="absolute rounded-full w-8 h-8 bg-zinc-200 -top-5"></div>
				<div className="absolute rounded-full w-8 h-8 bg-zinc-200 -bottom-5"></div>
			</div>
			<div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
				<div className="flex w-full justify-between items-center">
				</div>
				<div className="flex w-full mt-auto justify-between">
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Name</span>
						<span className="font-mono">{user}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">City</span>
						<span className="font-mono">{albu}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Location</span>
						<span className="font-mono">{song}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-xs text-zinc-400">Gate/Seat</span>
						<span className="font-mono">A11/21C</span>
					</div>
				</div>
			</div>
		</div>
	</section>

</main>
  );
}


/*    <div classNameName=" w-full">
      <div classNameName="relative w-full h-full ">
        <div classNameName="absolute flex flex-col justify-end w-full h-96 overflow-hidden inset-0 backface-hidden px-36 pb-8 max-sm:pb-2 max-sm:px-4 ">
          <img
            src={hw}
            alt=""
            classNameName=" absolute inset-0 object-contain backface-hidden w-full h-full rounded-xl"
          />
          <div classNameName="backface-hidden absolute inset-0 "></div>
          <div classNameName="z-10 pl-2 mb-24 text-2xl font-bold text-white max-sm:text-xs pb-2 w-80 ">
            <li classNameName="list-none w-60">Name: {user}</li>
            <li classNameName="list-none w-60">City: {albu}</li>
            <li classNameName="list-none w-full">Location: {song}</li>
          </div>
        </div>
      </div>
    </div>*/