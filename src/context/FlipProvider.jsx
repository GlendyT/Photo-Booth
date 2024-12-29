import { createContext, useEffect, useState } from "react";
import useRequestInfo from "../hooks/useRequestInfo";
import { initialItems } from "../components/Virthday/imagesList";

const FlipContext = createContext();

const FlipProvider = ({ children }) => {
  const [items, setItems] = useState( initialItems.flat() );
  const [prev, setPrev] = useState(-1);
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false); 
  const [showAccessModal, setShowAccessModal] = useState(false);
  const { setShowModal } = useRequestInfo();
  const [restart, setRestart] = useState(false); 
  const [gameStarted, setGameStarted] = useState(false); 
  const {setUsuario} = useRequestInfo();



  const handleUnlockClick = () => {
    setShowModal(false);
    setShowAccessModal(true);
  };

  const handleRestart = () => {
    setGameOver(false);
    setWin(false);
    setTimeExpired(false);
    setTimer(60);
    setPrev(-1);
    setRestart(true); 
    setGameStarted(false); 
    setShowAccessModal(false);
    setUsuario({ name: "", content: "", diseño: "", album: "", song: "" });
    
  };
  const handleStartGame = () => {
    setGameStarted(true);
    setRestart(false);
    setTimer(60);
    const shuffledItems = items.sort(() => Math.random() - 0.5);
    const initialItems = shuffledItems.map((item) => ({ ...item, price: "active" }));
    setItems(initialItems);

    const timeout = setTimeout(() => {
      const hiddenItems = initialItems.map((item) => ({ ...item, price: "" }));
      setItems(hiddenItems);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  const startTimer = () => {
    setGameStarted(true);
    setTimer(60); // Reinicia el temporizador
  };



  useEffect(() => {
    if (timer > 0 && gameStarted && !gameOver) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      setGameOver(true);
      setTimeExpired(true);
    }
  }, [timer, gameStarted, gameOver]);

  useEffect(() => {
    if (items.every((item) => item.price === "correct")) {
      setWin(true);
      setGameOver(true);
    }
  }, [items]);

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].price = "correct";
      items[prev].price = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].price = "wrong";
      items[prev].price = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].price = "";
        items[prev].price = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (
      items[id].price === "correct" ||
      items[id].price === "active" ||
      gameOver ||
      !gameStarted
    )
      return;

    if (prev === -1) {
      items[id].price = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  const isFlipped = (item) => {
    return item.isMatched || (item.price ? "active" + item.price : "");
  };

  const onCardClick = (item) => {
    if (!item.isMatched) {
      handleClick(items.indexOf(item));
    }
  };

  return (
    <FlipContext.Provider
      value={{
        items,
        setItems,
        prev,
        setPrev,
        check,
        handleClick,
        isFlipped,
        onCardClick,
        timer,
        gameOver,
        win,
        timeExpired,
        handleUnlockClick,
        showAccessModal,
        handleRestart,
        handleStartGame,
        restart,
        startTimer

      }}
    >
      {children}
    </FlipContext.Provider>
  );
};

export { FlipProvider };
export default FlipContext;
