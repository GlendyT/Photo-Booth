import { useState } from "react";

const Button = ({htmlToImageConvert}) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleDownload = () => {
        setButtonDisabled(true)
        htmlToImageConvert();
    }
  return (
    <div className="flex flex-col">
      <button className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4  disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors"
      onClick={handleDownload}
      disabled={buttonDisabled}
      >
        Save Photobooth
      </button>

      <button className="bg-purple-800 rounded-lg text-white font-bold p-2 mt-4  disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors"
      >
        Create Another One
      </button>
    </div>
  );
};

export default Button;
