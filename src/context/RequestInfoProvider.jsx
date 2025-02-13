import { createContext, useEffect, useState } from "react";
import { membersBts } from "../components/ValentinDay/data";

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
  const maxFromLimit = 31;
  const maxCharLimitH = 21;
  const maxFromLimitH = 16;
  const [currWord] = useState("hope");
  const [input, setInput] = useState("");
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState(null)
  const [cardData, setCardData] = useState(null)
  const [showForm, setShowForm] = useState(true)
  
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

  const usuarioGenerado1 = (event) => {
    const memberId = event.target.value;
    const selectedMember = membersBts.find((member) => member.id === Number(memberId));
    
    setUsuario({
      ...usuario,
      diseño: memberId,
      image: selectedMember?.image || "",
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

  
  // Card para dia de san valentin BTS

  const handleSubmit1 = (e) => {
      e.preventDefault()
      if(selectedMembers !== null) {
        const selected = membersBts.find((members) => members.id === parseInt(selectedMembers) )
        if (selected) {
          setCardData({
            image: selected.image,
          })
          generarUsuario(usuario)
          setShowForm(false)
        }
      }
    }


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
        selectedMembers,
        setSelectedMembers,
        cardData,
        setCardData,
        showForm,
        setShowForm,

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
        handleSubmit1,
        usuarioGenerado1

      }}
    >
      {children}
    </RequestInfoContext.Provider>
  );
};

export { RequestInfoProvider };

export default RequestInfoContext;
