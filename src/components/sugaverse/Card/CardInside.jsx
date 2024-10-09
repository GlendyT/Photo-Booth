
import { useEffect, useState } from "react";
import dday from "../assetsSuga/dday.avif";
import d2 from "../assetsSuga/d2.avif";
import agustd from "../assetsSuga/agustd.avif";
import pp2 from "../assetsSuga/pp2.avif"
import hgm from "../assetsSuga/hgm.avif"
import yc from "../assetsSuga/agustdd.avif" 
import Spinner from "../sugacomponents/Spinner";
import Buttons from "../Botones/Buttons";

const dicImg = {
  dday: dday,
  d2: d2,
  agustd: agustd,
  pp2: pp2,
  hgm: hgm,
  yc: yc,
};

const styles = {
  dday: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-16 pb-40 pt-20 max-sm:p-40 `}",
    div2: "p-0",
    div3: "text-white text-sm tracking-tight pb-20 font-dmmono max-sm:pt-5 max-sm:text-xs max-sm:pb-5",
    p: "text-white float-end font-dmmono max-sm:text-xs",
  },
    d2: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block pl-16 pr-6 pb-40 pt-24 max-ms:p-20`}",
    div2: "p-0",
    div3: "text-white text-sm tracking-tight text-center pl-20 font-dmmono ",
    p: "text-white text-right w-full pr-4 pt-20 max-sm:text-xs font-dmmono",
  },
  agustd: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-10 max-sm:px-8 max-sm:text-xs pb-40 pt-20 max-ms:p-20`}",
    div2: "bg-black p-0",
    div3: "text-white text-sm tracking-tight py-4 px-10 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:px-2 max-md:pr-15 max-sm:text-xs font-dmmono",
    p: "text-white max-sm:pt-none max-md:pt-5 max-sm:pt-10 max-sm:text-xs font-dmmono w-full bg-black text-right text-sm pt-2",
  },
  pp2: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-16 pt-24 pb-32 max-ms:p-20`}",
    div2: "px-1 py-0",
    div3: "text-black text-sm tracking-tight pt-0 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:pr-2 max-md:pr-15 max-sm:text-xs font-dmmono",
    p: "text-black w-full text-right pt-4 max-sm:pt-none pr-0 max-md:pt-5 max-sm:pt-0 max-sm:text-xs font-dmmono",
  },
   hgm: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-8 pb-40 pt-32 max-ms:p-20 `}",
    div2: "bg-orange-600 px-1 py-0",
    div3: "text-white tracking-tight pt-5 pb-2 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:pr-2 max-md:pr-15 max-sm:text-xs font-dmmono bg-orange-600",
    p: "text-white max-sm:pt-none max-md:pt-5 max-sm:pt-0 max-sm:text-xs font-dmmono w-full bg-orange-600 text-right text-sm",
  },
  yc: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-20 py-20 max-sm:px-10 max-sm:py-10 `}",
    div2: " px-1 py-0",
    div3: "text-white text-xs py-2 px-2 text-center max-md:pt-1 max-sm:pt-1 max-sm:pb-10 max-sm:pr-2 max-md:pr-15 max-sm:text-xs font-dmmono backdrop-blur-sm bg-black/30",
    p: "text-white max-sm:pb-2 max-md:pt-0 max-sm:text-xs font-dmmono text-right text-xs backdrop-blur-sm bg-black/30",
  },
};

export default function CardInside({
  descripcion,
  remitente,
  handleDownloadImage,
  handleLogout,
  diseño,
  notify
}) {
  const [ready, isReady] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      isReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!ready ? (
        <Spinner />
      ) : (
        <>
          <div id="print">
            <div className={styles[diseño].div1}
             style={{backgroundImage:`url(${dicImg[diseño]})`}}>
              <div className={styles[diseño].div2}>
                <div className={styles[diseño].div3}
                >
                  {descripcion}
                </div>
                <p className={styles[diseño].p} >
                  -{" "}{remitente}
                </p>

              </div>
            </div>
          </div>
          <Buttons
            handleDownloadImage={handleDownloadImage}
            handleLogout={handleLogout}
            notify={notify}
          />
        </>
      )}
    </>
  );
}

/*

  */