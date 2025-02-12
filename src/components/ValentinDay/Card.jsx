import useRequestInfo from "../../hooks/useRequestInfo";
import useDownload from "../../hooks/useDownload";
import { btsImg, membersBts } from "./data";
import { useRef } from "react";



export default function Card() {
  const { usuario, handleResetContent } = useRequestInfo();
  const { name, content, diseño } = usuario;
  const { handleDownloadImage } = useDownload();

    const elementRef = useRef(null);



  return (
    <div elementRef={elementRef}>

      <div
         id="print"
         className= "flex flex-col w-full shadow-2xl shadow-black/80"
      >
                <>
                     <div
                       className={membersBts[diseño].div1}
                       style={{ backgroundImage: `url(${btsImg[diseño]}) `}}
                       id="print"
                     >
                       <div className={membersBts[diseño].div2}>
                         <div className={membersBts[diseño].div3}>To: {name}</div>
                         <p className={membersBts[diseño].p}>From: {content}</p>
                       </div>
                     </div>

                   </>

      </div>

      <div className="flex justify-center mt-5 items-center space-x-4">
        <button
          type="button"
          onClick={handleDownloadImage}
          className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600"
        >
          Download
        </button>

        <button
          type="button"
          onClick={handleResetContent}
          className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 "
        >
          Restart
        </button>
      </div>
    </div>
  );
}
