export default function CitizenDetailItem({ label, data }) {
  return (
    <>
      <p className=" font-michroma font-extrabold text-violet-950 text-[10px] flex flex-col max-sm:text-[6px]">
        {label}
        <span className="font-normal text-[9px] max-sm:text-[7px] uppercase">
          {data}
        </span>
      </p>
    </>
  );
}
