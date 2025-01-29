import useRequestInfo from "../../hooks/useRequestInfo";
import ListV from "./ListV";
import { ButtonUtils } from "../../utils/ButtonUtils";

export default function Formulario() {
  //const [to, setTo] = useState("")
  //const [from, setFrom] = useState("")
  /*const [selectedMembers, setSelectedMembers] = useState(null)
  const [cardData, setCardData] = useState(null)
  const [showForm, setShowForm] = useState(true)*/
  const {
    usuario,
    handleSubmit,
    handleNameH,
    isMaxFromLimitReachedH,
    charCountFrom,
    isMaxCharLimitReachedH,
    maxFromLimitH,
    maxCharLimitH,
    handleContentH,
    charCount
  } = useRequestInfo();
  const { name, content, diseño } = usuario;

  /*const handleSubmit = (e) => {
    e.preventDefault()
    if(selectedMembers !== null) {
      const selected = membersBts.find((members) => members.id === parseInt(selectedMembers) )
      if (selected) {
        setCardData({
          to,
          from,
          image: selected.image,
        });
        setShowForm(false);
      }
    }
  }

  const handleRestart = () => {
    setTo("")
    setFrom("")
    setSelectedMembers(null)
    setCardData(null)
    setShowForm(true)
  }*/

  return (
    <div className="flex  ">
      <div className="border border-gray-300 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-lg p-5">
        <div className="flex items-center justify-center mt-5">
          <h3 className="text-2xl font-providence font-bold text-purple-800">
            Valentin's Day with BTS and Army
          </h3>
        </div>

        <form className="mt-5 font-dmmono" onSubmit={handleSubmit}>
          <div className="my-5 ">
            <label className="flex float-start text-sm mb-2 text-purple-900">
              To
            </label>
            <div
              className={`text-sm mb-2 float-end ${
                isMaxFromLimitReachedH ? "text-red-500" : "text-black"
              }`}
            >
              {isMaxFromLimitReachedH && (
                <span className="text-red-500">Too long!</span>
              )}{" "}
              {charCountFrom}/15
            </div>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleNameH}
              maxLength={maxFromLimitH}
              placeholder="Whom"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                isMaxFromLimitReachedH
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>

          <div className="my-5 ">
            <label className="flex float-start text-sm mb-2 text-purple-900">
              From
            </label>
            <div
              className={`text-sm mb-2 float-end ${
                isMaxCharLimitReachedH ? "text-red-500" : "text-black"
              }`}
            >
              {isMaxCharLimitReachedH && (
                <span className="text-red-500">Too long!</span>
              )}{" "}
              {charCount}/20
            </div>
            <input
              id="content"
              name="content"
              type="text"
              value={content}
              onChange={handleContentH}
              maxLength={maxCharLimitH}
              placeholder="Your Name"
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none ${
                isMaxCharLimitReachedH
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>

          <ListV />

          <ButtonUtils
            label="Create Post"
            type="submit"
            id="btn"
            disabled={!diseño}
            className="w-full p-3 uppercase bg-purple-800"
            bgColor="bg-black"
            textColor="text-white"
            font="font-pixel"
            disableColors="disabled:bg-opacity-25 disabled:cursor-not-allowed"
          />
        </form>
      </div>
    </div>
  );
}
