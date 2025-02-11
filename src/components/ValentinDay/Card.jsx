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
    <div className="justify-center items-center flex flex-col gap-2" elementRef={elementRef}>
      <div
        id="print"
        className="border border-gray-100 shadow-lg flex flex-col w-full bg-violet-400 outline-none focus:outline-none rounded-sm p-5"
      >
            {/* {image && (
              <div className="relative flex items-center justify-center overflow-hidden rounded-lg ">
               <img
                src={image}
                alt=""
                className="w-full h-auto max-w-[400px] object-cover rounded-sm"
               />
               <div className="absolute top-2 left-2 font-bold text-pink-700 px-2 py-1 mt-12 pl-28 text-3xl italic">
                      {name}
               </div>
               <div className="absolute bottom-20 left-48 font-bold text-red-400 italic text-2xl px-3 py-1 ">
                From: {content}
               </div>
              </div>
            )}
           */}

                   <>
                     <div
                       className={membersBts[diseño].div1}
                       style={{ backgroundImage: `url(${btsImg[diseño]})` }}
                       id="print"
                     >
                       <div className={membersBts[diseño].div2}>
                         <div className={membersBts[diseño].div3}>{content}</div>
                         <p className={membersBts[diseño].p}>- {name}</p>
                       </div>
                     </div>
          
                   </>
          
          {/* <p className="mt-2">To: {name}</p> */}
          {/* <p className="mb-4">From: {content}</p> */}



        
      </div>

      <div className="flex justify-center mt-5 items-center space-x-4">
        <button
          type="button"
          onClick={handleDownloadImage}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Download
        </button>

        <button
          type="button"
          onClick={handleResetContent}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 "
        >
          Restart
        </button>
      </div>
    </div>
  );
}
