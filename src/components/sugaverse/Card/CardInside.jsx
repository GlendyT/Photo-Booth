import { useEffect, useState } from "react";
import Spinner from "../sugacomponents/Spinner";
import Buttons from "../Botones/Buttons";
import useRequestInfo from "../../../hooks/useRequestInfo";
import { dicImg, styles } from "./Data";


export default function CardInside({
  name,
  content,
  diseño,
  notify,
  handleDownloadImage,
}) {
  const [ready, isReady] = useState(false);
  const { handleResetContent } = useRequestInfo();

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
          <div
            className={styles[diseño].div1}
            style={{ backgroundImage: `url(${dicImg[diseño]})` }}
            id="print"
          >
            <div className={styles[diseño].div2}>
              <div className={styles[diseño].div3}>{content}</div>
              <p className={styles[diseño].p}>- {name}</p>
            </div>
          </div>

          <Buttons
            handleDownloadImage={handleDownloadImage}
            handleResetContent={handleResetContent}
            notify={notify}
          />
        </>
      )}
    </>
  );
}

/*

  */
