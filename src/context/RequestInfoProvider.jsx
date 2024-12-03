import { createContext, useEffect, useRef, useState } from "react";

const RequestInfoContext = createContext();

const RequestInfoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    name: "",
    content: "",
    diseño: "",
    //TODO:ESTILOS PARA HOBIPALLOZA
    album: "",
    song: "",
    //TODO: HOBIDISCHARGE
  });
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState({});
  const [error, setError] = useState(false);
  const [charCount, setCharCount] = useState(usuario.content.length || 0);
  const [charCountFrom, setCharCountFrom] = useState(usuario.name.length || 0);
  const maxCharLimit = 281;
  const maxFromLimit = 15;
  
  const maxCharLimitH = 21;
  const maxFromLimitH = 16;
  const [currWord] = useState("hope");
  const [input, setInput] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [polaroids, setPolaroids] = useState([]);
  const [messageError, setMessageError] = useState("");
  const [imageSaved, setImageSaved] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [photo2Complete, setPhoto2Complete] = useState(false);

  const refInputFiles = [useRef(null), useRef(null), useRef(null)]; // Array of refs for each input
  const elementRef = useRef(null);
  const typeImages = ["image/png", "image/jpeg", "image/jpg"];

  const selectImage = (index) => {
    refInputFiles[index].current.click();
  };
  const isImageValid = (polaroid) => {
    if (polaroid && typeImages.includes(polaroid.type)) {
      setError(false);
      return true;
    } else {
      setError(true);
      setMessageError("File is incorrect");
      return false;
    }
  };
  const showImage = (index, polaroid) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(polaroid);

    fileReader.addEventListener("load", (e) => {
      setPolaroids((prevPolaroids) => {
        const updatedPolaroids = [...prevPolaroids];
        updatedPolaroids[index] = e.target.result;
        return updatedPolaroids;
      });
    });
  };
  const addImage = (index, e) => {
    e.preventDefault();

    const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;

    Array.from(files).forEach((file) => {
      if (isImageValid(file)) {
        showImage(index, file);
      }
    });
  };
  const resetPhotos = () => {
    setPolaroids([]);
    setChangeColor(false);
    setError(false);
    setImageSaved(false);
  };

  useEffect(() => {
    if (imageSaved) {
      const timer = setTimeout(() => {
        setImageSaved(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [imageSaved]);

  useEffect(() => {
    if (polaroids[2] || polaroids[1] || polaroids[0]) {
      setPhoto2Complete(true);
    } else {
      setPhoto2Complete(false);
    }
  }, [polaroids]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [error]);

  const generateWordDisplay = () => {
    return isCorrectGuess ? currWord : "_".repeat(currWord.length).trim();
  };

  const handleCorrectWord = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const guessedWord = input.toLowerCase();
    const correct = guessedWord === currWord.toLowerCase();
    setIsCorrectGuess(correct);
    setHasSubmitted(true);
    setInput("");

    if (!correct) {
      setShowErrorMessage(true);
    }
  };

  useEffect(() => {
    if (showErrorMessage) {
      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000); // El mensaje desaparece después de 3 segundos

      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar o cuando cambie el estado
    }
  }, [showErrorMessage]);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContent = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharLimit) {
      setCharCount(inputValue.length);
      usuarioGenerado(e);
    }
  };

  // Maneja el conteo de caracteres en el input (From)
  const handleName = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxFromLimit) {
      setCharCountFrom(inputValue.length);
      usuarioGenerado(e);
    }
  };

  const handleContentH = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxCharLimitH) {
      setCharCount(inputValue.length);
      usuarioGenerado(e);
    }
  };

  // Maneja el conteo de caracteres en el input (From)
  const handleNameH = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxFromLimitH) {
      setCharCountFrom(inputValue.length);
      usuarioGenerado(e);
    }
  };

  const isMaxCharLimitReached = charCount === maxCharLimit;
  const isMaxCharLimitReachedH = charCount === maxCharLimitH;
  const isMaxFromLimitReached = charCountFrom === maxFromLimit;
  const isMaxFromLimitReachedH = charCountFrom === maxFromLimitH;

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (Object.values(usuario).includes("")) {
    //   setError(true);
    //   return;
    // }
    setError(false);
    generarUsuario(usuario);
  };

  const usuarioGenerado = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const generarUsuario = (dato) => {
    setCargando(true);
    try {
      setResultado(dato);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetContent = () => {
    setCargando(true);
    setUsuario({ name: "", content: "", diseño: "", album: "", song: "" });
    setCharCount(0);
    setCharCountFrom(0);
  };

  return (
    <RequestInfoContext.Provider
      value={{
        usuario,
        setUsuario,
        resultado,
        setResultado,
        cargando,
        setCargando,
        error,
        setError,
        input,
        setInput,
        isCorrectGuess,
        setIsCorrectGuess,
        hasSubmitted,
        setHasSubmitted,
        showModal,
        setShowModal,
        showErrorMessage,
        setShowErrorMessage,
        isMobile,
        setIsMobile,
        currWord,
        charCount,
        setCharCount,
        charCountFrom,
        setCharCountFrom,
        isMaxCharLimitReached,
        isMaxCharLimitReachedH,
        isMaxFromLimitReached,
        isMaxFromLimitReachedH,
        polaroids,
        setPolaroids,
        messageError,
        setMessageError,
        changeColor,
        setChangeColor,
        photo2Complete,
        setPhoto2Complete,
        //Handlers
        usuarioGenerado,
        generarUsuario,
        handleResetContent,
        handleSubmit,
        handleContent,
        handleContentH,
        handleName,
        handleNameH,
        generateWordDisplay,
        handleCorrectWord,
        refInputFiles,
        elementRef,
        selectImage,
        addImage,
        resetPhotos,
        typeImages,
        isImageValid,
        showImage,
        maxFromLimit,
        maxCharLimit
      }}
    >
      {children}
    </RequestInfoContext.Provider>
  );
};

export { RequestInfoProvider };

export default RequestInfoContext;
