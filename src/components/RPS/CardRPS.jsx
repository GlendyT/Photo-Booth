import useDownload from "../../hooks/useDownload";
import useRequestInfo from "../../hooks/useRequestInfo";
import useRPS from "../../hooks/useRPS";
import { ButtonUtils } from "../../utils/ButtonUtils";
import { BtsImgRPS, UserImgRPS } from "./ImagesRPS";
import OptionButton from "./OptionButton";
import { BtsRPS, ResultRPS, UserRPS } from "./PlayersRPS";
import { RPSFreebie } from "./RPSFreebie";

const CardRPS = () => {
  const {
    result,
    userChoice,
    userMessage,
    userWins,
    maxTurns,
    turns,
    computerWins,
    options,
    computerChoice,
    handlePlay,
    disabled,
    resetAll,
  } = useRPS();
  const { usuario, setShowModal, showModal } = useRequestInfo();
  const { handleDownloadImage } = useDownload();
  const { name, song } = usuario;
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div
        className={`w-full py-4 rounded-t-xl bg-white/5 backdrop-blur-sm ${
          result === 1
            ? "border-4 border-green-400"
            : result === 2
            ? "border-4 border-red-400"
            : "border-4 border-blue-400"
        }`}
      >
        <div className="flex flex-row items-center justify-center">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={handlePlay}
              disabled={disabled}
              turns={turns}
              maxTurns={maxTurns}
            />
          ))}
        </div>

        <UserImgRPS
          result={result}
          userMessage={userMessage}
          options={options}
          userChoice={userChoice}
        />
      </div>
      <div className="flex flex-row items-center text-center w-full">
        <UserRPS result={result} userWins={userWins} name={name} />
        <ResultRPS
          result={result}
          maxTurns={maxTurns}
          turns={turns}
          userWins={userWins}
          computerWins={computerWins}
          song={song}
          name={name}
        />
        <BtsRPS result={result} song={song} computerWins={computerWins} />
      </div>
      <BtsImgRPS
        result={result}
        userMessage={userMessage}
        options={options}
        computerChoice={computerChoice}
      />

      <div className="py-2 flex flex-row gap-2 justify-between">
        {(turns === 2) | maxTurns && (
          <ButtonUtils
            onClick={resetAll}
            label="Restart"
            className="uppercase"
            textColor="text-white"
            size="text-sm max-md:text-sm"
            bgColor="bg-fuchsia-950"
            padding="py-2 px-2"
          />
        )}
        {maxTurns - turns === 0 && (
          <ButtonUtils
            onClick={handleModal}
            label={showModal ? "Show your 🎁" : "Hide"}
            className="uppercase"
            textColor="text-white"
            size="text-sm max-md:text-sm"
            bgColor="bg-fuchsia-950"
            padding="py-2 px-2"
          />
        )}
        {maxTurns - turns === 0 && !showModal && <RPSFreebie />}
        {maxTurns - turns === 0 && !showModal && (
          <ButtonUtils
            onClick={handleDownloadImage}
            label={showModal ? "" : "Download"}
            className="uppercase"
            textColor="text-white"
            size="text-sm max-md:text-sm"
            bgColor="bg-fuchsia-950"
            padding="py-2 px-2"
          />
        )}
      </div>
    </div>
  );
};

export default CardRPS;
