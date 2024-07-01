import { useState } from "react";

export default function Buttons({ handleDownloadImage, handleLogout}) {

//deshabilitar el boton de descarga
  const [buttonDisabled, setButtonDisabled] = useState(false);
 
  const handleDownload = () => {
    setButtonDisabled(true);
    handleDownloadImage();

  };
  return (
    <div className="flex flex-col-3 gap-2 mt-2">
      <button
        onClick={handleDownload}
        className="w-full bg-black text-white cursor-pointer px-2 py-2 font-bold font-pixel disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors rounded-xl"
        disabled= {buttonDisabled}
      >
        Download
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 float-end"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>

      <button 
      className="w-full bg-white text-black cursor-pointer px-2 py-2 font-bold font-pixel rounded-xl">
        <a
          href="https://twitter.com/intent/tweet?text=Happy%20Suga%20Day&hashtags=IntoTheSuga_Verse&hashtags=VerseForSuga&hashtags=PoetryForSuga&hashtags=intothesugaverse&hashtags=verseforsugabyarmy
        "
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="float-end"
          >
            <path
              fill="currentColor"
              d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"
            >
              <animate
                fill="freeze"
                attributeName="d"
                dur="0.8s"
                keyTimes="0;0.3;0.5;1"
                values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"
              />
            </path>
          </svg>
          Share
        </a>
      </button>

      <button
        onClick={handleLogout}
        className="w-full bg-transparent text-white cursor-pointer px-2 py-2 font-pixel text-center hover:bg-black rounded-xl"
      >
        Another
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 float-end text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}

/*        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20em"
          height="3em"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
          />
        </svg>


        url=https://open.spotify.com/artist/5RmQ8k4l3HZ8JoPb4mNsML/*/
