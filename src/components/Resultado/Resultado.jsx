import { toPng } from "html-to-image";
import DragImage from "../DragImage/DragImage";
import Photo1 from "../DragImage/Photo1";
import Photo2 from "../DragImage/Photo2";
import Button from "./Button";
import { useCallback, useRef, useState } from "react";

const Resultado = () => {
    const [changeColor, setChangeColor] = useState(false);
    const [imageSaved, setImageSaved] = useState(false)
    const refInputFile = useRef(null);

    const selectImage = (e) => {
        refInputFile.current.click();
        setChangeColor(!changeColor);
      };
    
    const elementRef = useRef(null);
    const htmlToImageConvert = useCallback(() => {
        if(!elementRef.current) return;

        toPng(elementRef.current, {cacheBust:false})
        .then((dataUrl) => {
            const link = document.createElement( 'a' );
            link.download = "Festa PhotoBooth Strips";
            link.href = dataUrl;

            link.addEventListener("click", () => {
                setImageSaved(true);
            });
            link.click();
        })
        .catch((err) => {
            console.log(err);
        });
    }, [elementRef]);
  return (
    <div>
      <div className=" pt-6 bg-white" ref={elementRef}>
        <DragImage changeColor={changeColor} setChangeColor={setChangeColor} selectImage={selectImage} refInputFile={refInputFile} />
        <Photo1 changeColor={changeColor} setChangeColor={setChangeColor} selectImage={selectImage} refInputFile={refInputFile} />
        <Photo2 changeColor={changeColor} setChangeColor={setChangeColor} selectImage={selectImage} refInputFile={refInputFile}/>
      </div>
      <Button
       htmlToImageConvert={htmlToImageConvert}
       selectImage={selectImage} 
      />
    </div>
  );
};

export default Resultado;
