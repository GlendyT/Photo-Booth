export default function VCitizenDetailItem({ label, data }) {
    return (
      <>
        <p className=" font-michroma font-extrabold text-violet-950 text-[6px] flex flex-col max-sm:text-[5px]">
          {label}
          <span className="font-normal text-[8px] max-sm:text-[6px] uppercase">
            {data}
          </span>
        </p>
      </>
    );
  }